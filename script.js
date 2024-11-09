const activePage = window.location.pathname

        const navLinks = document.querySelectorAll('li a').forEach(link => {
            if (link.href.includes(`${activePage}`)) {
                link.classList.add('active');
            }

        })