# ReportU - Development Specification

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.3.2+**: App Router, Server Components, Turbopack
- **React 19**: Latest features, concurrent rendering
- **TailwindCSS 4.0**: Utility-first styling, custom design system
- **TypeScript**: Disabled per requirements (JavaScript only)

### Animation & Effects Libraries
- **GSAP 3.12+**: ScrollTrigger, Timeline animations
- **Three.js**: 3D visualizations, interactive demos
- **Phaser 3**: 2D game engine for interactive demos
- **Vanta.js**: Animated backgrounds, particle effects
- **Framer Motion**: Component animations (alternative)

### UI/UX Libraries
- **21st.dev**: Modern component library
- **Heroicons**: Icon system
- **Headless UI**: Accessible components
- **React Hook Form**: Form management
- **React Dropzone**: File upload handling

### Demo Engine
- **Local Storage**: Simulated backend data
- **JSON**: Mock API responses
- **Cookies**: Session management
- **IndexedDB**: Large data storage

## 📱 Application Architecture

### Page Structure
```
/                    # HomePage (Hero, Features, Pricing)
/demo               # DemoPage (Working MVP simulation)
/report             # Report submission flow
/track              # Report tracking dashboard
/about              # About us, team, mission
/contact            # Contact form, support
/privacy            # Privacy policy
/terms              # Terms of service
```

### Component Architecture
```
components/
├── layout/
│   ├── Header.js
│   ├── Footer.js
│   └── Navigation.js
├── ui/
│   ├── Button.js
│   ├── Input.js
│   ├── Modal.js
│   └── Card.js
├── effects/
│   ├── ParticleBackground.js
│   ├── ScrollAnimations.js
│   └── ThreeJSScene.js
├── forms/
│   ├── ReportForm.js
│   ├── EvidenceUpload.js
│   └── LocationSelector.js
└── demo/
    ├── ReportSimulator.js
    ├── StatusTracker.js
    └── DepartmentRouter.js
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-blue: #0066FF
--primary-dark: #003D99
--primary-light: #3385FF

/* Secondary Colors */
--secondary-green: #00CC66
--secondary-red: #FF3366
--secondary-yellow: #FFCC00

/* Neutral Colors */
--gray-900: #1A1A1A
--gray-800: #2D2D2D
--gray-700: #404040
--gray-600: #666666
--gray-500: #808080
--gray-400: #999999
--gray-300: #CCCCCC
--gray-200: #E6E6E6
--gray-100: #F5F5F5
--white: #FFFFFF

/* Gradient Colors */
--gradient-primary: linear-gradient(135deg, #0066FF, #00CC66)
--gradient-secondary: linear-gradient(135deg, #FF3366, #FFCC00)
```

### Typography
```css
/* Font Families */
--font-primary: 'Inter', sans-serif
--font-secondary: 'JetBrains Mono', monospace

/* Font Sizes */
--text-xs: 0.75rem
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-3xl: 1.875rem
--text-4xl: 2.25rem
--text-5xl: 3rem
--text-6xl: 3.75rem
```

### Spacing System
```css
/* Spacing Scale */
--space-1: 0.25rem
--space-2: 0.5rem
--space-3: 0.75rem
--space-4: 1rem
--space-5: 1.25rem
--space-6: 1.5rem
--space-8: 2rem
--space-10: 2.5rem
--space-12: 3rem
--space-16: 4rem
--space-20: 5rem
--space-24: 6rem
```

## 🎭 Animation Specifications

### Page Transitions
- **Hero Section**: Fade in with stagger effect
- **Scroll Animations**: Parallax backgrounds, reveal on scroll
- **Hover Effects**: Smooth scale, color transitions
- **Loading States**: Skeleton screens, progress indicators

### Interactive Elements
- **Buttons**: Hover scale (1.05x), color shift, shadow
- **Cards**: Lift effect, border glow, content reveal
- **Forms**: Focus states, validation animations
- **Navigation**: Smooth slide, active indicators

### 3D Effects (Three.js)
- **Hero Background**: Floating geometric shapes
- **Report Visualization**: 3D data representation
- **Interactive Map**: 3D country models
- **Loading Screens**: 3D logo animation

### 2D Effects (Phaser 3)
- **Report Flow Demo**: Interactive step-by-step
- **Department Routing**: Animated flow chart
- **Status Tracking**: Real-time progress bars
- **Evidence Upload**: Drag-and-drop simulation

## 📋 Feature Implementation

### HomePage Sections

#### 1. Hero Section
- **Animated Logo**: SVG with GSAP timeline
- **Particle Background**: Vanta.js waves/particles
- **CTA Buttons**: Hover animations, click effects
- **Mini Demo**: Embedded report simulation

#### 2. Problem/Solution
- **Split Layout**: Problem left, solution right
- **Icon Animations**: Reveal on scroll
- **Statistics Counter**: Animated number counting
- **Comparison Table**: Before/after scenarios

#### 3. Features Showcase
- **3-Column Grid**: Mobile responsive
- **Feature Cards**: Hover effects, icon animations
- **Interactive Demos**: Click to see feature in action
- **Video Previews**: Autoplay on hover

#### 4. Pricing Section
- **Pricing Cards**: Hover lift, popular badge
- **Feature Comparison**: Expandable details
- **CTA Buttons**: Different styles per tier
- **FAQ Accordion**: Smooth expand/collapse

### DemoPage Features

#### 1. Report Submission Simulator
- **Multi-step Form**: Progress indicator
- **Country Selection**: Interactive map
- **Offense Categories**: Visual selection grid
- **Evidence Upload**: Drag-and-drop with preview
- **Real-time Validation**: Instant feedback

#### 2. Department Routing Visualization
- **Flow Chart**: Animated decision tree
- **Location Mapping**: GPS to department
- **Priority Classification**: Color-coded system
- **Estimated Timeline**: Dynamic calculation

#### 3. Status Tracking Dashboard
- **Report Timeline**: Interactive progress
- **Notification System**: Real-time updates
- **Evidence Gallery**: Lightbox viewer
- **Communication Log**: Chat-like interface

## 🔧 Development Phases

### Phase 1: Foundation (Week 1-2)
- [x] Next.js project setup
- [x] TailwindCSS configuration
- [x] Basic component structure
- [ ] Design system implementation
- [ ] Animation library setup

### Phase 2: HomePage (Week 3-4)
- [ ] Hero section with animations
- [ ] Problem/solution sections
- [ ] Features showcase
- [ ] Pricing section
- [ ] Footer with links

### Phase 3: DemoPage (Week 5-6)
- [ ] Report submission flow
- [ ] Department routing demo
- [ ] Status tracking simulation
- [ ] Evidence upload system
- [ ] Interactive map integration

### Phase 4: Effects & Polish (Week 7-8)
- [ ] GSAP scroll animations
- [ ] Three.js 3D scenes
- [ ] Phaser 3 interactive demos
- [ ] Vanta.js backgrounds
- [ ] Mobile responsiveness

### Phase 5: Testing & Optimization (Week 9-10)
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Accessibility compliance
- [ ] SEO optimization
- [ ] Final QA testing

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--mobile: 320px
--mobile-lg: 480px
--tablet: 768px
--desktop: 1024px
--desktop-lg: 1280px
--desktop-xl: 1536px
```

### Mobile Optimizations
- **Touch Targets**: Minimum 44px
- **Font Sizes**: Larger on mobile
- **Navigation**: Hamburger menu
- **Forms**: Single column layout
- **Images**: Optimized loading

### Desktop Enhancements
- **Hover States**: Rich interactions
- **Multi-column Layouts**: Better space usage
- **Keyboard Navigation**: Full support
- **Advanced Animations**: More complex effects

## 🚀 Performance Targets

### Core Web Vitals
- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1

### Additional Metrics
- **TTI**: < 3.5 seconds
- **Speed Index**: < 3.0 seconds
- **Bundle Size**: < 500KB initial
- **Image Optimization**: WebP format

## 🔒 Security Considerations

### Data Protection
- **No Real Data**: Simulation only
- **Local Storage**: Encrypted sensitive data
- **HTTPS**: SSL certificate required
- **Input Validation**: Client-side sanitization

### Privacy Compliance
- **GDPR Ready**: Data handling practices
- **PDPA Compliant**: Singapore/Malaysia laws
- **Cookie Policy**: Clear disclosure
- **Data Retention**: Simulated policies

---

**Development Specification v1.0**
**Last updated: January 2025**
