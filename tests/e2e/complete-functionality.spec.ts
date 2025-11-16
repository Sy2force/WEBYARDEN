import { test, expect } from '@playwright/test'

test.describe('Web Yarden - Complete Functionality Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Start from the French homepage
    await page.goto('/fr')
  })

  test('Navigation and responsive layout', async ({ page }) => {
    // Test logo and main navigation
    await expect(page.locator('[data-testid="navbar-logo"]')).toBeVisible()
    
    // Test desktop navigation links
    const navItems = ['home', 'services', 'packs', 'projects', 'about', 'contact']
    for (const item of navItems) {
      await expect(page.locator(`[data-testid="nav-link-${item}"]`)).toBeVisible()
    }

    // Test mobile menu on smaller screens
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.locator('[data-testid="mobile-menu-button"]').click()
    
    for (const item of navItems) {
      await expect(page.locator(`[data-testid="mobile-nav-link-${item}"]`)).toBeVisible()
    }
  })

  test('Dark mode toggle functionality', async ({ page }) => {
    // Test dark mode toggle
    const darkToggle = page.locator('[data-testid="dark-mode-toggle"]')
    await expect(darkToggle).toBeVisible()
    
    // Click to toggle dark mode
    await darkToggle.click()
    
    // Verify dark class is applied to html element
    const htmlElement = page.locator('html')
    await expect(htmlElement).toHaveClass(/dark/)
    
    // Toggle back to light mode
    await darkToggle.click()
    await expect(htmlElement).not.toHaveClass(/dark/)
  })

  test('Language switching functionality', async ({ page }) => {
    // Test language switcher
    const langSwitcher = page.locator('[data-testid="language-switcher"]')
    await expect(langSwitcher).toBeVisible()
    
    await langSwitcher.click()
    
    // Test switching to English
    await page.locator('[data-testid="lang-option-en"]').click()
    await expect(page).toHaveURL('/en')
    
    // Test switching to Hebrew (RTL)
    await langSwitcher.click()
    await page.locator('[data-testid="lang-option-he"]').click()
    await expect(page).toHaveURL('/he')
    
    // Verify RTL support
    const bodyElement = page.locator('body')
    await expect(bodyElement).toHaveAttribute('dir', 'rtl')
    
    // Switch back to French
    await langSwitcher.click()
    await page.locator('[data-testid="lang-option-fr"]').click()
    await expect(page).toHaveURL('/fr')
  })

  test('Packs page functionality', async ({ page }) => {
    // Navigate to packs page
    await page.locator('[data-testid="nav-link-packs"]').click()
    await expect(page).toHaveURL('/fr/packs')
    
    // Test pack cards are visible
    const packCards = page.locator('[data-testid^="pack-card-"]')
    await expect(packCards.first()).toBeVisible()
    
    // Test pack interaction (if enableCart is true)
    const firstPackButton = page.locator('[data-testid^="pack-button-"]').first()
    if (await firstPackButton.isVisible()) {
      await firstPackButton.click()
    }
  })

  test('Chat widget functionality', async ({ page }) => {
    // Test chat widget button
    const chatButton = page.locator('[data-testid="chat-widget-button"]')
    await expect(chatButton).toBeVisible()
    
    // Open chat widget
    await chatButton.click()
    
    // Test chat input and send functionality
    const chatInput = page.locator('[data-testid="chat-input"]')
    const sendButton = page.locator('[data-testid="chat-send-button"]')
    
    await expect(chatInput).toBeVisible()
    await expect(sendButton).toBeVisible()
    
    // Test sending a message
    await chatInput.fill('Test message')
    await sendButton.click()
    
    // Verify message appears (basic test)
    await expect(page.locator('text=Test message')).toBeVisible()
    
    // Close chat widget
    await page.locator('[data-testid="chat-close-button"]').click()
  })

  test('Accessibility features', async ({ page }) => {
    // Test keyboard navigation on main nav
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Verify focus states are visible
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Test ARIA labels are present
    await expect(page.locator('[aria-label]').first()).toBeVisible()
    
    // Test alt texts for images
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i)
      if (await img.isVisible()) {
        await expect(img).toHaveAttribute('alt')
      }
    }
  })

  test('Form functionality', async ({ page }) => {
    // Navigate to contact page
    await page.locator('[data-testid="nav-link-contact"]').click()
    await expect(page).toHaveURL('/fr/contact')
    
    // Test form fields are present
    const nameField = page.locator('input[name="name"], input[name="firstName"]').first()
    const emailField = page.locator('input[name="email"]')
    const messageField = page.locator('textarea[name="message"]')
    
    if (await nameField.isVisible()) {
      await nameField.fill('Test User')
    }
    if (await emailField.isVisible()) {
      await emailField.fill('test@example.com')
    }
    if (await messageField.isVisible()) {
      await messageField.fill('Test message content')
    }
  })

  test('Page loading performance', async ({ page }) => {
    // Test critical pages load within reasonable time
    const pages = ['/fr/services', '/fr/about', '/fr/projects', '/fr/support']
    
    for (const testPage of pages) {
      const startTime = Date.now()
      await page.goto(testPage)
      const loadTime = Date.now() - startTime
      
      // Verify page loads within 3 seconds
      expect(loadTime).toBeLessThan(3000)
      
      // Verify key content is visible
      await expect(page.locator('h1, h2').first()).toBeVisible()
    }
  })

  test('Error handling', async ({ page }) => {
    // Test 404 page
    await page.goto('/fr/non-existent-page')
    
    // Should either redirect or show error content
    await page.waitForTimeout(1000)
    
    // Verify navigation still works from error page
    const logo = page.locator('[data-testid="navbar-logo"]')
    if (await logo.isVisible()) {
      await logo.click()
      await expect(page).toHaveURL('/fr')
    }
  })

  test('SEO and metadata', async ({ page }) => {
    // Test homepage metadata
    await expect(page).toHaveTitle(/Web Yarden/)
    
    // Test meta description is present
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content')
    
    // Test Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]')
    const ogDescription = page.locator('meta[property="og:description"]')
    
    await expect(ogTitle).toHaveAttribute('content')
    await expect(ogDescription).toHaveAttribute('content')
  })

  test('Cross-browser compatibility basics', async ({ page, browserName }) => {
    // Test basic functionality across browsers
    console.log(`Testing on ${browserName}`)
    
    // Test CSS Grid support (modern layout)
    const gridElement = page.locator('.grid, [class*="grid-cols"]').first()
    if (await gridElement.isVisible()) {
      const computedStyle = await gridElement.evaluate(el => 
        window.getComputedStyle(el).display
      )
      expect(['grid', 'flex']).toContain(computedStyle)
    }
    
    // Test JavaScript functionality
    await page.locator('[data-testid="dark-mode-toggle"]').click()
    await page.waitForTimeout(500)
    
    const htmlClass = await page.locator('html').getAttribute('class')
    expect(htmlClass).toContain('dark')
  })
})

// Additional test suite for advanced functionality
test.describe('Advanced Features', () => {
  test('Animation performance', async ({ page }) => {
    await page.goto('/fr')
    
    // Test smooth animations don't cause layout thrashing
    await page.locator('[data-testid="mobile-menu-button"]').click()
    
    // Wait for animation to complete
    await page.waitForTimeout(500)
    
    // Verify menu is fully open
    await expect(page.locator('[role="navigation"][aria-label="Mobile navigation menu"]')).toBeVisible()
  })

  test('Dynamic content loading', async ({ page }) => {
    await page.goto('/fr/services')
    
    // Test service cards load dynamically
    const serviceCards = page.locator('[data-testid^="service-card-"], .service-card')
    await expect(serviceCards.first()).toBeVisible({ timeout: 5000 })
    
    // Test search/filter functionality if present
    const searchInput = page.locator('input[type="search"], input[placeholder*="recherch"]')
    if (await searchInput.isVisible()) {
      await searchInput.fill('web')
      await page.waitForTimeout(1000)
    }
  })
})
