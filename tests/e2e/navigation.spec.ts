import { test, expect } from '@playwright/test'

test.describe('Navigation i18n', () => {
  test('displays French navigation correctly', async ({ page }) => {
    await page.goto('/fr')
    
    // Vérifier que les traductions françaises sont affichées
    await expect(page.locator('nav')).toContainText('Accueil')
    await expect(page.locator('nav')).toContainText('Services')
    await expect(page.locator('nav')).toContainText('Nos Packs')
    await expect(page.locator('nav')).toContainText('Projets')
    await expect(page.locator('nav')).toContainText('À propos')
    await expect(page.locator('nav')).toContainText('Contact')
    
    // Vérifier que les clés brutes NE sont PAS affichées
    await expect(page.locator('nav')).not.toContainText('navigation.home')
    await expect(page.locator('nav')).not.toContainText('navigation.services')
    
    // Vérifier le tagline
    await expect(page.locator('nav')).toContainText('Agence Digitale #1 en Israël')
    
    // Vérifier le bouton CTA
    await expect(page.getByRole('link', { name: 'Devis Gratuit' })).toBeVisible()
  })

  test('displays English navigation correctly', async ({ page }) => {
    await page.goto('/en')
    
    await expect(page.locator('nav')).toContainText('Home')
    await expect(page.locator('nav')).toContainText('Services')
    await expect(page.locator('nav')).toContainText('Our Packages')
    await expect(page.locator('nav')).toContainText('Projects')
    await expect(page.locator('nav')).toContainText('About')
    await expect(page.locator('nav')).toContainText('Contact')
    
    await expect(page.locator('nav')).toContainText('Israel\'s #1 Digital Agency')
    await expect(page.getByRole('link', { name: 'Free Quote' })).toBeVisible()
  })

  test('displays Hebrew navigation correctly', async ({ page }) => {
    await page.goto('/he')
    
    await expect(page.locator('nav')).toContainText('בית')
    await expect(page.locator('nav')).toContainText('שירותים')
    await expect(page.locator('nav')).toContainText('החבילות שלנו')
    await expect(page.locator('nav')).toContainText('פרויקטים')
    await expect(page.locator('nav')).toContainText('אודות')
    await expect(page.locator('nav')).toContainText('צור קשר')
    
    await expect(page.locator('nav')).toContainText('סוכנות הדיגיטל מספר 1 בישראל')
    await expect(page.getByRole('link', { name: 'קבלו הצעת מחיר' })).toBeVisible()
  })

  test('language switcher works correctly', async ({ page }) => {
    await page.goto('/fr')
    
    // Cliquer sur le sélecteur de langue
    await page.click('button:has-text("🇫🇷")')
    
    // Vérifier que le dropdown est visible
    await expect(page.locator('[data-testid="language-dropdown"]')).toBeVisible()
    
    // Changer vers l'anglais
    await page.click('a:has-text("🇺🇸")')
    
    // Vérifier que l'URL a changé
    await expect(page).toHaveURL('/en')
    
    // Vérifier que le contenu est maintenant en anglais
    await expect(page.locator('nav')).toContainText('Home')
  })

  test('mobile menu works correctly', async ({ page }) => {
    // Simuler un écran mobile
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/fr')
    
    // Cliquer sur le bouton menu mobile
    await page.click('[aria-label="Toggle menu"]')
    
    // Vérifier que le menu mobile est visible
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible()
    
    // Vérifier que les liens sont présents
    await expect(page.locator('[data-testid="mobile-menu"]')).toContainText('Accueil')
    await expect(page.locator('[data-testid="mobile-menu"]')).toContainText('Services')
  })

  test('no hydration mismatch errors', async ({ page }) => {
    // Capturer les erreurs de console
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    
    await page.goto('/fr')
    
    // Attendre que la page soit complètement chargée
    await page.waitForLoadState('networkidle')
    
    // Vérifier qu'il n'y a pas d'erreurs d'hydratation
    const hydrationErrors = errors.filter(error => 
      error.includes('hydration') || 
      error.includes('Text content does not match server-rendered HTML') ||
      error.includes('cannot be a child of')
    )
    
    expect(hydrationErrors).toHaveLength(0)
  })
})
