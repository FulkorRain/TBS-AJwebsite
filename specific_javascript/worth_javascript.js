 const tabs = document.querySelectorAll('.worth-images img');
 const sections = document.querySelectorAll('.worth-content .section');

 tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
 })