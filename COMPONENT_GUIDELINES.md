# Web Yarden Component Guidelines

## Overview

This document outlines the unified component system created to eliminate duplication and ensure design consistency across the Web Yarden digital agency website. The system provides standardized components with configurable variants to maintain visual coherence while allowing for page-specific customization.

## Design System

### Core Principles

1. **Consistency**: All components follow the same design patterns and color schemes
2. **Flexibility**: Components support multiple variants and configurations
3. **Accessibility**: All components include proper ARIA labels and semantic HTML
4. **Performance**: Components are optimized with proper animations and loading states
5. **Maintainability**: Centralized styling reduces code duplication

### Color Palette

The unified color system is defined in `/lib/design-system.ts`:

- **Primary**: Blue-Indigo gradient (`from-blue-600 to-indigo-700`)
- **Secondary**: Purple-Pink gradient (`from-purple-600 to-pink-600`)
- **Success**: Green-Blue gradient (`from-green-600 to-blue-700`)
- **Warning**: Orange-Red gradient (`from-orange-500 to-red-600`)
- **Info**: Cyan-Blue gradient (`from-cyan-500 to-blue-600`)

## Core Components

### 1. BaseCard Component

**Location**: `/components/ui/BaseCard.tsx`

**Purpose**: Unified card component replacing ServiceCard, PackCard, and EcommercePackCard

**Key Features**:
- Multiple layout variants (vertical, horizontal, cube)
- Configurable shadows, borders, and gradients
- Built-in animation support
- Accessibility compliant

**Usage Example**:
```tsx
<BaseCard
  variant="service"
  title="Web Development"
  description="Custom website creation"
  price={5000}
  features={['Responsive Design', 'SEO Optimized', 'Fast Loading']}
  onAddToCart={() => handleAddToCart()}
  gradient="from-indigo-500 to-purple-600"
  shadowLevel="lg"
  borderRadius="xl"
/>
```

**Variants**:
- `service`: For service listings
- `pack`: For package offerings
- `ecommerce`: For e-commerce packs
- `dashboard`: For dashboard cards
- `simple`: For basic information cards

### 2. HeroSection Component

**Location**: `/components/ui/HeroSection.tsx`

**Purpose**: Standardized hero sections with consistent styling and animations

**Key Features**:
- Theme-based color schemes
- Configurable sizes and alignments
- Built-in action buttons
- Background image support
- Responsive design

**Usage Example**:
```tsx
<HeroSection
  theme="primary"
  title="Nos Services Digitaux"
  description="Solutions complètes pour votre présence en ligne"
  size="lg"
  alignment="center"
  primaryAction={{
    label: "Découvrir nos services",
    onClick: () => router.push('/services')
  }}
  secondaryAction={{
    label: "Demander un devis",
    onClick: () => router.push('/devis'),
    variant: "outline"
  }}
/>
```

**Themes**:
- `primary`: Blue-Indigo gradient
- `secondary`: Purple-Pink gradient
- `success`: Green-Blue gradient
- `warning`: Orange-Red gradient
- `info`: Cyan-Blue gradient
- `custom`: Custom gradient via props

### 3. Button Component

**Location**: `/components/ui/Button.tsx`

**Purpose**: Unified button system with consistent styling and behavior

**Key Features**:
- Multiple variants and sizes
- Loading states
- Icon support
- Animation effects
- Accessibility features

**Usage Example**:
```tsx
<Button
  variant="primary"
  size="lg"
  gradient={true}
  loading={isSubmitting}
  leftIcon={<PlusIcon />}
  onClick={handleSubmit}
>
  Ajouter au panier
</Button>
```

**Variants**:
- `primary`: Main action buttons
- `secondary`: Secondary actions
- `outline`: Outlined buttons
- `ghost`: Text-only buttons
- `danger`: Destructive actions
- `success`: Positive actions

### 4. Form Components

**Location**: `/components/ui/Form.tsx` and `/components/ui/FormField.tsx`

**Purpose**: Standardized form styling and behavior

**Key Features**:
- Consistent field styling
- Validation support
- Icon integration
- Responsive layouts
- Animation support

**Usage Example**:
```tsx
<Form
  title="Contact Information"
  variant="card"
  onSubmit={handleSubmit}
  columns={2}
  submitButton={{
    label: "Send Message",
    variant: "primary"
  }}
>
  <FormField
    type="email"
    name="email"
    label="Email Address"
    required
    value={formData.email}
    onChange={handleChange}
    leftIcon={<EmailIcon />}
  />
</Form>
```

## Migration Guidelines

### Replacing Existing Components

#### ServiceCard → BaseCard
```tsx
// Before
<ServiceCard service={service} index={index} />

// After
<BaseCard
  variant="service"
  title={service.title}
  description={service.description}
  price={service.price}
  features={service.features}
  image={service.image}
  category={service.category}
  delivery={service.delivery}
  onAddToCart={() => addToCart(service)}
  index={index}
/>
```

#### PackCard → BaseCard
```tsx
// Before
<PackCard pack={pack} isHorizontal={isHorizontal} />

// After
<BaseCard
  variant="pack"
  layout={isHorizontal ? "horizontal" : "vertical"}
  title={pack.name}
  subtitle={pack.slogan}
  price={pack.price}
  originalPrice={pack.originalPrice}
  features={pack.services}
  badge={pack.badge}
  onAddToCart={() => addToPack(pack)}
/>
```

#### Hero Sections → HeroSection
```tsx
// Before
<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
  <div className="max-w-7xl mx-auto py-20 px-4">
    <h1 className="text-4xl font-extrabold">Title</h1>
    <p className="text-xl">Description</p>
  </div>
</section>

// After
<HeroSection
  theme="primary"
  title="Title"
  description="Description"
  size="lg"
/>
```

### Page-Specific Implementations

#### Services Page
- Use `BaseCard` with `variant="service"`
- Implement `HeroSection` with `theme="primary"`
- Use grid layout with consistent spacing

#### Packs Page
- Use `BaseCard` with `variant="pack"` or `variant="ecommerce"`
- Support both grid and horizontal layouts
- Include filtering and comparison features

#### Contact Page
- Use `HeroSection` with `theme="primary"`
- Implement `Form` with `variant="card"`
- Use `BaseCard` for contact information display

#### Dashboard Page
- Use `BaseCard` with `variant="dashboard"`
- Include progress bars and status indicators
- Implement responsive grid layouts

## Best Practices

### Component Usage

1. **Always use the unified components** instead of creating custom implementations
2. **Leverage the design system** constants from `/lib/design-system.ts`
3. **Use consistent spacing** with the predefined spacing scale
4. **Apply proper animations** using the built-in animation support
5. **Ensure accessibility** by providing proper ARIA labels and semantic HTML

### Styling Guidelines

1. **Use theme variants** instead of custom colors
2. **Apply consistent shadows** using the predefined shadow levels
3. **Use standard border radius** values from the design system
4. **Implement responsive design** with the provided breakpoint system
5. **Maintain consistent typography** using the typography scale

### Performance Considerations

1. **Use proper image optimization** with Next.js Image component
2. **Implement lazy loading** for cards and heavy components
3. **Optimize animations** to avoid performance issues
4. **Use proper key props** for list items
5. **Implement proper error boundaries** for component failures

## File Structure

```
components/
├── ui/                    # Unified UI components
│   ├── BaseCard.tsx      # Universal card component
│   ├── HeroSection.tsx   # Standardized hero sections
│   ├── Button.tsx        # Unified button system
│   ├── Form.tsx          # Form container component
│   └── FormField.tsx     # Individual form fields
├── home/                 # Page-specific components
├── services/             # Legacy components (to be migrated)
└── layout/               # Layout components

lib/
├── design-system.ts      # Design system constants
├── i18n.ts              # Internationalization
└── packs.ts             # Data definitions
```

## Testing Guidelines

### Component Testing

1. **Test all variants** of each component
2. **Verify accessibility** with screen readers
3. **Test responsive behavior** across breakpoints
4. **Validate animations** and interactions
5. **Check dark mode compatibility**

### Integration Testing

1. **Test component combinations** on actual pages
2. **Verify data flow** between components
3. **Test form submissions** and validations
4. **Check cart functionality** with BaseCard components
5. **Validate routing** and navigation

## Future Enhancements

### Planned Improvements

1. **Theme Customization**: Allow runtime theme switching
2. **Component Variants**: Add more specialized variants
3. **Animation Library**: Expand animation options
4. **Accessibility Features**: Enhanced screen reader support
5. **Performance Optimization**: Further optimize bundle size

### Migration Roadmap

1. **Phase 1**: Migrate contact and services pages
2. **Phase 2**: Update packs and dashboard pages
3. **Phase 3**: Refactor remaining pages
4. **Phase 4**: Remove legacy components
5. **Phase 5**: Optimize and enhance unified system

## Support and Maintenance

### Getting Help

- Review this documentation for component usage
- Check the design system file for constants and utilities
- Examine the refactored contact page as a reference implementation
- Test components in isolation before integration

### Contributing

- Follow the established patterns when adding new variants
- Update documentation when modifying components
- Ensure backward compatibility when possible
- Add proper TypeScript types for new props

---

This unified component system ensures consistency, reduces duplication, and provides a solid foundation for the Web Yarden website's continued development and maintenance.
