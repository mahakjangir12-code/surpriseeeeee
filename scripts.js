document.addEventListener('DOMContentLoaded', () => {
    // बटन प्राप्त करें
    const openBtn = document.getElementById('open-surprise-btn');
    const nextBtns = document.querySelectorAll('.next-btn');

    // कवर पेज से अगले पेज पर जाने के लिए
    if (openBtn) {
        openBtn.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target;
            showPage(targetId);
        });
    }

    // 'अगला स्टेप' बटन के लिए
    nextBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target;
            showPage(targetId);
        });
    });

    /**
     * सक्रिय पेज को छिपाता है और नए पेज को दिखाता है।
     */
    function showPage(targetId) {
        // वर्तमान सक्रिय पेज को छिपाएं
        const currentPage = document.querySelector('.page.active');
        if (currentPage) {
            currentPage.classList.remove('active');
            currentPage.classList.add('hidden');
        }

        // लक्षित पेज को दिखाएं
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            // छोटी देरी सुनिश्चित करती है कि ट्रांजिशन ठीक से होता है
            setTimeout(() => {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('active');
            }, 10);
        }
    }
});