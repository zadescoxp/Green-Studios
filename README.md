# Green Studios - Sustainable Energy Solutions

A modern, responsive website showcasing Green Studios' commitment to sustainable energy solutions and environmental innovation.

## 🚀 Features

- **Modern UI/UX Design**
  - Clean, minimalist interface
  - Smooth animations and transitions
  - Responsive layout for all devices
  - Beautiful typography and spacing

- **Interactive Components**
  - Animated loading screen
  - Smooth scroll animations
  - Contact form with success feedback
  - Dynamic navigation

- **Pages**
  - Home: Showcases the company's vision
  - About: Detailed information about the company
  - Goals: Displays company objectives and achievements
  - Contact: Interactive contact form

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 13+ (App Router)
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Lucide Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/green-studios.git
```

2. Install dependencies:
```bash
cd green-studios
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Project Structure

```
green-studios/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── contact/
│   └── goals/
├── src/
│   ├── components/
│   │   ├── general/
│   │   └── UI/
│   └── utils/
├── public/
└── package.json
```

## 🖼️ Image Assets

Place your images in the `public` directory:
- `bg.jpg` - Home page background
- `goals.jpg` - Goals page background
- `contact_bg.png` - Contact page background
- `scroll.svg` - Scroll indicator
- `arrow.svg` - Arrow icon

## 🎯 Usage

### Navigation
- Use the navigation bar to move between different sections
- Smooth scroll animations enhance the user experience
- Responsive design works on all devices

### Contact Form
1. Fill in your name, email, and message
2. Click "Send Message"
3. A success message will appear
4. The form will reset after 3 seconds

### Customization
- Modify colors in `tailwind.config.js`
- Update content in respective page components
- Add new pages in the `app` directory
- Customize animations in `utils/variants.ts`

## 🔧 Development

### Adding New Pages
1. Create a new directory in `app`
2. Add `page.tsx` with your component
3. Update navigation in `navbar.tsx`

### Styling
- Use Tailwind CSS classes
- Follow the existing design system
- Maintain consistent spacing and typography

### Animations
- Use Framer Motion for animations
- Check `utils/variants.ts` for animation presets
- Keep animations subtle and purposeful

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - Lead Developer
- [Team Member] - Designer
- [Team Member] - Content Writer

## 📞 Contact

For any queries or support, please reach out through the contact form on the website.
