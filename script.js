// Navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        const page = this.getAttribute('data-page');
        console.log('Navigating to:', page);
    });
});

// Add task card functionality
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('Add new task functionality');
    });
});

// Task card click functionality
document.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Task card clicked');
    });
});

// Filter button functionality
document.querySelector('.filter-btn').addEventListener('click', function() {
    alert('Filter functionality');
});

// User profile dropdown
document.querySelector('.user-profile').addEventListener('click', function() {
    alert('User profile menu');
});

// Notification button
document.querySelector('.notification-btn').addEventListener('click', function() {
    alert('Notifications');
});

// Search functionality
document.querySelector('.icon-btn').addEventListener('click', function() {
    alert('Search functionality');
});

// Initialize
console.log('DoMeNow Tasks Board loaded successfully');