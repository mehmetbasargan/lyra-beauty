// Mobile menu script
document.addEventListener('DOMContentLoaded', () => {
	console.log('Mobile menu script loaded! 🚀');

	const trigger = document.getElementById('mobile-menu-trigger');
	const closeBtn = document.getElementById('mobile-menu-close');
	const drawer = document.getElementById('mobile-menu-drawer');
	const panel = document.getElementById('mobile-menu-panel');
	const overlay = document.getElementById('mobile-menu-overlay');

	if (!trigger || !drawer) {
		console.error("Hata: Menü elemanları bulunamadı! ID'leri kontrol et.");
		return;
	}

	// Menü Aç/Kapat Fonksiyonu
	const toggleMenu = (isOpen) => {
		if (isOpen) {
			drawer.classList.remove('invisible');
			// Küçük bir delay ile animasyonu başlat
			setTimeout(() => {
				overlay.classList.add('opacity-100');
				panel.classList.remove('-translate-x-full');
			}, 10);
			document.body.style.overflow = 'hidden';
		} else {
			overlay.classList.remove('opacity-100');
			panel.classList.add('-translate-x-full');
			document.body.style.overflow = '';
			setTimeout(() => {
				drawer.classList.add('invisible');
			}, 300);
		}
	};

	trigger.addEventListener('click', () => toggleMenu(true));
	if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
	if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

	// Alt Menüler (Accordion)
	document.querySelectorAll('.mobile-row-trigger').forEach((row) => {
		row.addEventListener('click', function () {
			const submenu = this.nextElementSibling; // mobile-submenu div'i
			const arrow = this.querySelector('.mobile-submenu-arrow');

			if (submenu && submenu.classList.contains('mobile-submenu')) {
				submenu.classList.toggle('hidden');
				if (arrow) arrow.classList.toggle('rotate-180');
			}
		});
	});
});

// Sticky Header
document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	const scrollThreshold = 100; // Kaç piksel sonra yapışsın?

	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			header.classList.add('is-sticky');
		} else {
			header.classList.remove('is-sticky');
		}
	};

	// Sayfa yüklendiğinde de kontrol et (yenileme durumunda)
	handleScroll();

	// Scroll dinleyicisi (performans için throttle eklenebilir ama bu haliyle de stabildir)
	window.addEventListener('scroll', handleScroll);
});

// Search Popup
document.addEventListener('DOMContentLoaded', () => {
	const searchModal = document.getElementById('search-modal');
	const searchInput = searchModal.querySelector('input[name="q"]');
	const triggers = [
		document.getElementById('search-trigger-desktop'),
		document.getElementById('search-trigger-mobile'),
	];

	const toggleSearch = (open) => {
		if (open) {
			searchModal.classList.remove('invisible');
			// 'requestAnimationFrame' tarayıcının bir sonraki karede
			// en akıcı şekilde işlemesini sağlar (setTimeout'tan daha iyidir)
			requestAnimationFrame(() => {
				searchModal.classList.add('is-active');
				// Input focus işlemini animasyon bitince yaparsak kasma azalır
				setTimeout(() => searchInput.focus(), 400);
			});
			document.body.classList.add('overflow-hidden');
		} else {
			searchModal.classList.remove('is-active');
			setTimeout(() => {
				searchModal.classList.add('invisible');
			}, 500); // CSS süresiyle aynı olmalı
			document.body.classList.remove('overflow-hidden');
		}
	};

	triggers.forEach((t) =>
		t?.addEventListener('click', (e) => {
			e.preventDefault();
			toggleSearch(true);
		}),
	);

	document.getElementById('search-close-btn')?.addEventListener('click', () => toggleSearch(false));
	document.getElementById('search-overlay')?.addEventListener('click', () => toggleSearch(false));
});
