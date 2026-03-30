document.addEventListener('DOMContentLoaded', () => {
	console.log('Header Scripti Yüklendi! 🚀'); // Bu yazıyı konsolda görmelisin

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
