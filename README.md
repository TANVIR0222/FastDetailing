# Business Management App

A comprehensive mobile business management application built with React Native and Expo, specifically designed for car detailing businesses. This app streamlines operations by providing tools for job management, customer tracking, employee coordination, marketing campaigns, and financial operations.

## 🚀 Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (~53.0.23)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (~5.8.3)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (~5.1.7) with file-based routing
- **Styling:** [TailwindCSS](https://tailwindcss.com/) via [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames) (~4.9.1)
- **State Management:** [MMKV](https://github.com/mrousavy/react-native-mmkv) for fast local storage
- **UI Components:**
  - React Native Gesture Handler
  - React Native Reanimated
  - React Native SVG
  - Expo Image
  - Expo Linear Gradient
  - Expo Blur
- **Forms & Validation:** [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- **Calendar:** React Native Calendars & React Native Big Calendar
- **Charts:** React Native Gifted Charts
- **Additional Features:**
  - Expo Image Picker
  - React Native WebView
  - React Native Color Picker
  - React Native OTP Entry

## ✨ Key Features

### 📋 Job Management
- Create, view, and manage jobs with detailed information
- Track job status (Upcoming, In Progress, In Route, Completed, Cancelled)
- Assign jobs to employees
- Add multiple vehicles per job
- Service selection and customization
- Progress tracking with visual indicators
- Calendar view for scheduled jobs

### 👥 Customer Management
- Customer profiles with contact information
- Vehicle tracking per customer
- Service history
- Customer segmentation for marketing

### 👔 Employee Management
- Employee accounts and authentication
- Role-based permissions system
- Time-off request management
- Availability scheduling
- Employee ratings and reviews
- Performance tracking

### 📅 Scheduling & Calendar
- Interactive calendar interface
- Day, week, and month views
- Drag-and-drop job scheduling
- Availability management
- Time-off tracking

### 💰 Financial Operations
- Invoice generation and management
- Payment processing
- Tip configuration
- Payment request system
- Revenue tracking and analytics
- Refund management

### 📊 Analytics & Reporting
- Revenue metrics with trend indicators
- Customer acquisition tracking
- Recurring customer analysis
- Review and rating statistics
- Performance dashboards

### 📱 Marketing Tools
- **Email Blast:** Send bulk emails to customers
- **SMS Blast:** SMS campaign management
- **QR Codes:** Generate QR codes for services/promotions
- **Marketing Flows:** Automated marketing workflows
- Customer segmentation and targeting
- Campaign tracking and analytics

### 💬 Communication
- In-app chat functionality
- Customer notifications
- Employee messaging

### ⚙️ Settings & Configuration
- Business account management
- Service catalog management
- Pricing configuration
- Reminder settings
- Invoice customization
- Payment gateway settings
- App preferences

## 📁 Project Structure

```
Business-Management/
├── src/
│   ├── app/                          # Expo Router file-based routing
│   │   ├── (tabs)/                   # Bottom tab navigation
│   │   │   ├── index.tsx             # Home screen
│   │   │   ├── status.tsx            # Status/analytics screen
│   │   │   ├── marketing.tsx         # Marketing dashboard
│   │   │   ├── chat.tsx              # Chat interface
│   │   │   └── setting.tsx           # Settings screen
│   │   ├── auth/                     # Authentication flows
│   │   ├── (job-view)/               # Job management screens
│   │   ├── (marketing)/              # Marketing feature screens
│   │   ├── (setting)/                # Settings screens
│   │   ├── (select-customer)/        # Customer selection
│   │   ├── (select-plan)/            # Plan selection
│   │   ├── (create-services)/        # Service creation
│   │   ├── (status)/                 # Status details
│   │   ├── account-info/             # Account management
│   │   ├── employee-auth/            # Employee authentication
│   │   ├── common/                   # Shared screens
│   │   └── _layout.tsx               # Root layout
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # UI component library
│   │   ├── GlobalInput.tsx
│   │   ├── GlobalTopBar.tsx
│   │   ├── MainButton.tsx
│   │   └── ...
│   ├── lib/                          # Core libraries and utilities
│   │   ├── type.ts                   # TypeScript type definitions
│   │   ├── mmkv-storage.ts           # Local storage setup
│   │   ├── tailwind.ts               # Tailwind configuration
│   │   └── all-tabs.tsx              # Tab configuration
│   ├── utils/                        # Utility functions
│   │   ├── auth-validationSchema.ts  # Auth form validation
│   │   ├── from-validations.ts       # General form validation
│   │   ├── all-dummy-data.js         # Mock data for development
│   │   └── utils.ts                  # Helper functions
│   ├── constants/                    # App constants
│   └── hooks/                        # Custom React hooks
├── assets/                           # Static assets
│   ├── fonts/                        # SF Pro font family
│   ├── images/                       # App images and icons
│   └── Icons.tsx                     # SVG icon definitions
├── android/                          # Android native code
├── ios/                              # iOS native code
├── app.json                          # Expo configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
└── tailwind.config.ts                # Tailwind CSS configuration
```

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js:** v18 or higher
- **npm** or **yarn**
- **Expo CLI:** Install globally with `npm install -g expo-cli`
- **iOS Simulator** (Mac only) or **Android Studio** for emulators
- **Expo Go app** (optional, for testing on physical devices)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Business-Management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

5. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app for physical device

## 🔐 Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
# API Keys (if needed in future)
# EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
# EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here

# Backend API (if applicable)
# EXPO_PUBLIC_API_URL=https://api.yourdomain.com

# Other Configuration
# EXPO_PUBLIC_APP_ENV=development
```

> **Note:** Currently, this app does not require any API keys. The `.env.example` file is provided as a template for future integrations.

## 📱 Run Commands

### Development

```bash
# Start Expo development server
npm start

# Start with cache cleared
npm start --clear

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

### Linting

```bash
# Run ESLint
npm run lint
```

### Other Commands

```bash
# Reset project (moves starter code to app-example)
npm run reset-project
```

## 📸 Screenshots

_Screenshots will be added here to showcase the app's interface and features._

## 🏗️ Development Notes

### Font Loading

The app uses the SF Pro font family, loaded via `expo-font`:
- SF Pro Text (Regular, Light, Medium, Semibold, Bold)
- SF Pro Display (Black)

### Navigation Structure

The app uses Expo Router's file-based routing system with:
- **Tab Navigation:** Bottom tabs for main sections (Home, Status, Marketing, Chat, Settings)
- **Stack Navigation:** Nested stacks for feature-specific flows
- **Modal Screens:** Transparent modals for overlays and confirmations

### State Management

- **Local Storage:** MMKV for fast, synchronous key-value storage
- **Form State:** Formik for form management with Yup validation schemas

### Styling Approach

- TailwindCSS utilities via `twrnc` for consistent, responsive styling
- Custom color palette defined in `tailwind.config.ts`
- Platform-specific adjustments using React Native's `Platform` API

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Tanvir Islam**

---

Built with ❤️ using React Native and Expo
