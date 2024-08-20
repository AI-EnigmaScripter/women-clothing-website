document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.querySelector('.close');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const product = e.target.getAttribute('data-product');
            showModal(product);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showModal(product) {
        let title, description, price;

        switch (product) {
            case 'shalwar-kameez':
                title = 'Modern Shalwar-Kameez';
                description = 'Timeless and sophisticated shalwar kameez crafted for elegance and comfort.';
                price = '$29.99';
                break;
            case 'Bridal Dress':
                title = 'Exquisite Bridal Dress';
                description = 'A stunning bridal dress with intricate details and luxurious fabrics for your unforgettable day.';
                price = '$89.99';
                break;
            case 'lehenga':
                title = 'Elegant Lehenga';
                description:'Experience grace and style with our Elegant Womens Lehenga Collection, blending traditional charm with contemporary trends.';
                price = '$39.99';
                break;
            case 'Saree':
                title = 'Graceful Saree';
                description = 'Elevate your elegance with our Graceful Saree, featuring exquisite designs and luxurious fabrics.';
                price = '$25.99';
                break;
            
            default:
                title = 'Unknown Product';
                description = 'Details not available.';
                price = 'N/A';
                break;
        }

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
        modal.style.display = 'flex';
    }
});
