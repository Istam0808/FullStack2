document.addEventListener('DOMContentLoaded', function() {
    // Default user data
    const defaultUser = {
        username: 'user123',
        password: 'password123',
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum sed orci euismod scelerisque.',
        profilePic: '/api/placeholder/150/150',
        isLoggedIn: false
    };

    // Local storage handling
    const getUser = () => {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    };

    const saveUser = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    // Initialize user data if not exists
    if (!getUser()) {
        saveUser(defaultUser);
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Search dropdown functionality
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const searchInput = document.querySelector('.input_search input');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            searchInput.value = this.textContent;
        });
    });

    // Modal functionality
    const modal = document.getElementById('modalWindow');
    const accountLink = document.getElementById('accountLink');
    const closeModal = document.getElementById('closeModal');
    const modalContent = document.getElementById('modal-content');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const profileTab = document.querySelector('[data-tab="profile"]');

    // Function to update tab visibility based on login status
    function updateTabVisibility() {
        const currentUser = getUser();
        if (currentUser && currentUser.isLoggedIn) {
            // Show profile tab
            profileTab.style.display = 'block';
        } else {
            // Hide profile tab
            profileTab.style.display = 'none';
        }
    }

    // Call on page load
    updateTabVisibility();

    // Tab switching
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Deactivate all tabs
            modalTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activate selected tab
            this.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });

    // Open modal when account link is clicked
    accountLink.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.add('active');
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'translateY(-50px) scale(0.8)';
        
        setTimeout(() => {
            modalContent.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            modalContent.style.opacity = '1';
            modalContent.style.transform = 'translateY(0) scale(1)';
        }, 50);

        // Check if user is logged in
        const currentUser = getUser();
        if (currentUser && currentUser.isLoggedIn) {
            // Show profile tab
            showProfileTab();
        } else {
            // Show login tab
            modalTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            document.querySelector('[data-tab="login"]').classList.add('active');
            document.getElementById('login-tab').classList.add('active');
        }
    });

    // Function to show profile tab
    function showProfileTab() {
        modalTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        document.querySelector('[data-tab="profile"]').classList.add('active');
        document.getElementById('profile-tab').classList.add('active');
        
        // Update profile info
        const currentUser = getUser();
        updateProfileDisplay(currentUser);
    }

    // Close modal functionality
    function closeModalWindow() {
        modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'translateY(-50px) scale(0.8)';
        
        setTimeout(() => {
            modal.classList.remove('active');
        }, 300);
    }

    closeModal.addEventListener('click', closeModalWindow);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalWindow();
        }
    });

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const usernameError = document.getElementById('username-error');
        const passwordError = document.getElementById('password-error');
        
        // Reset errors
        usernameError.textContent = '';
        passwordError.textContent = '';
        
        // Validate credentials
        const currentUser = getUser();
        
        if (username === currentUser.username && password === currentUser.password) {
            // Login successful
            currentUser.isLoggedIn = true;
            saveUser(currentUser);
            
            // Update tab visibility
            updateTabVisibility();
            
            // Show profile tab
            showProfileTab();
            
            // Reset form
            loginForm.reset();
        } else {
            // Login failed
            passwordError.textContent = 'Invalid username or password';
        }
    });

    // Profile display/edit functionality
    const userProfile = document.getElementById('user-profile');
    const editProfileForm = document.getElementById('edit-profile-form');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const cancelEditBtn = document.getElementById('cancel-edit');
    const profileForm = document.getElementById('profile-form');

    // Update profile display
    function updateProfileDisplay(user) {
        document.getElementById('display-name').textContent = user.name;
        document.getElementById('display-email').textContent = user.email;
        document.getElementById('display-bio').textContent = user.bio;
        document.getElementById('profile-pic').src = user.profilePic;
    }

    // Show edit form
    editProfileBtn.addEventListener('click', function() {
        const currentUser = getUser();
        
        // Fill form with current data
        document.getElementById('edit-name').value = currentUser.name;
        document.getElementById('edit-email').value = currentUser.email;
        document.getElementById('edit-bio').value = currentUser.bio;
        
        // Toggle view
        userProfile.style.display = 'none';
        editProfileForm.style.display = 'block';
    });

    // Cancel edit
    cancelEditBtn.addEventListener('click', function() {
        userProfile.style.display = 'block';
        editProfileForm.style.display = 'none';
    });

    // Profile picture change
    const changePicBtn = document.getElementById('change-pic');
    const profilePicInput = document.getElementById('profile-pic-input');

    changePicBtn.addEventListener('click', function() {
        profilePicInput.click();
    });

    // Handle profile picture selection
    profilePicInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const currentUser = getUser();
                currentUser.profilePic = e.target.result;
                saveUser(currentUser);
                document.getElementById('profile-pic').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Save profile changes
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const currentUser = getUser();
        currentUser.name = document.getElementById('edit-name').value;
        currentUser.email = document.getElementById('edit-email').value;
        currentUser.bio = document.getElementById('edit-bio').value;
        
        saveUser(currentUser);
        updateProfileDisplay(currentUser);
        
        // Toggle view
        userProfile.style.display = 'block';
        editProfileForm.style.display = 'none';
    });

    // Add logout button to profile tab
    const logoutBtn = document.createElement('button');
    logoutBtn.id = 'logout-btn';
    logoutBtn.classList.add('btn', 'btn-danger');
    logoutBtn.textContent = 'Log out';
    logoutBtn.style.marginTop = '5px';
    
    logoutBtn.style.padding = '10px 20px';
    logoutBtn.style.borderRadius = '5px';
    logoutBtn.style.backgroundColor = 'var(--primary-color)';
    logoutBtn.style.color = 'white';
    logoutBtn.style.border = 'none';
    logoutBtn.style.fontWeight = '500';
    logoutBtn.style.cursor = 'pointer';
    logoutBtn.style.transition = '0.3s';

    
    // Add logout button to the profile tab
    userProfile.appendChild(logoutBtn);
    
    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        const currentUser = getUser();
        currentUser.isLoggedIn = false;
        saveUser(currentUser);
        
        // Update tab visibility
        updateTabVisibility();
        
        // Show login tab
        modalTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        document.querySelector('[data-tab="login"]').classList.add('active');
        document.getElementById('login-tab').classList.add('active');
    });

    // Check if user is logged in on page load
    const currentUser = getUser();
    if (currentUser && currentUser.isLoggedIn) {
        // Update account link to show logged in status
        accountLink.textContent = currentUser.name;
    }
});