document.addEventListener('DOMContentLoaded', function() {
    // Initialize Category Chart
    const ctx = document.getElementById('categoryChart').getContext('2d');
    const categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Office Supplies',
                'Electrical Tools',
                'Kitchen Equipment',
                'Computer Equipment',
                'Welding Tools',
                'Automotive Tools',
                'Beauty/Cosmetology',
                'Dressmaking',
                'Housekeeping'
            ],
            datasets: [{
                data: [304, 92, 129, 152, 68, 63, 74, 58, 56],
                backgroundColor: [
                    '#63b3ed', // light blue
                    '#9f7aea', // purple
                    '#f6ad55', // orange
                    '#4fd1c5', // teal
                    '#fc8181', // red
                    '#68d391', // green
                    '#f687b3', // pink
                    '#e53e3e', // red
                    '#ecc94b'  // yellow
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
    
    // Handle Filter button click
    const filterButton = document.querySelector('button:has(.w-4)');
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            alert('Filter options would appear here');
        });
    }
    
    // Add click handlers for menu items
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        if (item.textContent.trim() !== 'Home') {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                alert(`Navigating to ${this.textContent.trim()} page`);
            });
        }
    });
    
    // Add click handlers for option buttons
    const optionButtons = document.querySelectorAll('button.text-gray-400');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Options menu would appear here');
        });
    });
    
    // Handle search functionality
    const searchInput = document.querySelector('input[placeholder="Search..."]');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                alert(`Searching for: ${this.value}`);
            }
        });
    }
    
    // Apply animation for new alerts
    const lowStockItems = document.querySelectorAll('.bg-red-100');
    lowStockItems.forEach(item => {
        item.classList.add('animate-pulse');
        setTimeout(() => {
            item.classList.remove('animate-pulse');
        }, 2000);
    });
});
