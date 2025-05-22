# Personal Portfolio Website

A modern, responsive portfolio website for Thanna Tarun Teja, a Java Full Stack Developer based in India.

## Features

- Responsive design that works on all devices
- Modern and clean UI with a classic blue color scheme
- Smooth scrolling navigation
- Mobile-friendly navigation menu
- Contact form
- Skills showcase
- Projects showcase
- Social media links

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons

## Getting Started

1. Clone this repository
2. Open `index.html` in your web browser
3. Customize the content to match your information

## Customization

### Personal Information
Edit the following sections in `index.html`:
- Update the name and title in the hero section
- Modify the about section text
- Add your own projects in the projects section
- Update social media links in the contact section

### Styling
The color scheme can be modified in `styles.css` by changing the CSS variables in the `:root` selector:
```css
:root {
    --primary-blue: #1e3a8a;
    --secondary-blue: #3b82f6;
    --light-blue: #93c5fd;
    /* ... other colors ... */
}
```

### Adding Projects
To add a new project, copy the project card structure in the projects section:
```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Project Description</p>
    <div class="project-links">
        <a href="#" class="project-link">View Project</a>
    </div>
</div>
```

## Contact Form

The contact form is currently set up to log form submissions to the console. To make it functional:
1. Set up a backend server to handle form submissions
2. Update the form submission handler in `script.js` to send data to your server

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. 