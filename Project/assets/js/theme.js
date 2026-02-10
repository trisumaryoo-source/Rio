(() => {
  const themeButtons = document.querySelectorAll('[data-bs-theme-value]')
  const activeIcon = document.querySelector('.theme-icon-active use')

  const setActiveTheme = (theme) => {
    const iconMap = {
      light: '#sun-fill',
      dark: '#moon-stars-fill',
      auto: '#circle-half'
    }

    // ganti ikon di navbar
    activeIcon.setAttribute('href', iconMap[theme])

    // set attribute theme bootstrap
    document.documentElement.setAttribute('data-bs-theme', theme)

    // update active state dropdown
    themeButtons.forEach(btn => {
      btn.classList.remove('active')
      btn.setAttribute('aria-pressed', 'false')

      if (btn.getAttribute('data-bs-theme-value') === theme) {
        btn.classList.add('active')
        btn.setAttribute('aria-pressed', 'true')
      }
    })
  }

  // klik dropdown
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-bs-theme-value')
      localStorage.setItem('theme', theme)
      setActiveTheme(theme)
    })
  })

  // load awal
  const savedTheme = localStorage.getItem('theme') || 'light'
  setActiveTheme(savedTheme)
})()
