// Hàm mở Google Maps
function goToMap() {
    // Lưu ý: Link này nên thay bằng link thực tế của quán trên Google Maps
    const address = "109B Lê Đình Thám, Tân Quý, Tân Phú, Thành phố Hồ Chí Minh";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, "_blank");
}

// Hiệu ứng Fade-in khi cuộn trang (Optional)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});