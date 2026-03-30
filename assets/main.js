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
	const searchPopup = document.getElementById('search-popup');
	const searchPanel = document.getElementById('search-panel');
	const searchOverlay = document.getElementById('search-overlay');
	const searchTriggers = [
		document.getElementById('search-trigger-desktop'),
		document.getElementById('search-trigger-mobile'),
	];
	const searchClose = document.getElementById('search-close');
	const searchInput = searchPopup.querySelector('input[name="q"]');

	const openSearch = (e) => {
		if (e) e.preventDefault();
		searchPopup.classList.remove('invisible');
		// Kısa bir delay ile animasyonu başlatıyoruz
		setTimeout(() => {
			searchOverlay.classList.add('opacity-100');
			searchPanel.classList.remove('-translate-y-full');
			searchInput.focus(); // Açılınca direkt klavye odaklanır
		}, 10);
		document.body.style.overflow = 'hidden'; // Arka plan kaymasın
	};

	const closeSearch = () => {
		searchOverlay.classList.remove('opacity-100');
		searchPanel.classList.add('-translate-y-full');
		setTimeout(() => {
			searchPopup.classList.add('invisible');
		}, 500);
		document.body.style.overflow = '';
	};

	searchTriggers.forEach((trigger) => {
		if (trigger) trigger.addEventListener('click', openSearch);
	});

	if (searchClose) searchClose.addEventListener('click', closeSearch);
	if (searchOverlay) searchOverlay.addEventListener('click', closeSearch);

	// ESC tuşu ile kapatma
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !searchPopup.classList.contains('invisible')) {
			closeSearch();
		}
	});
});
