/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        info: "var(--info)",
        success: "var(--success)",
        error: "var(--error)",

        'neutral-bg': "var(--neutral-bg)",
        'on-neutral-bg': "var(--on-neutral-bg)",
        'primary-bg': "var(--primary-bg)",
        'on-primary-bg': "var(--on-primary-bg)",
        primary: "var(--primary)",
        'on-primary':"var(--on-primary)",
        border: "var(--border)",
        muted: "var(--muted)",
        'primary-hover': "var(--primary-hover)",
        'offwhite': "var(--offwhite)",
        neutral: "var(--neutral-500)",
        contrast:'var(--contrast)',
        "on-contrast": "var(--on-contrast)",
        "muted-dark": "var(--muted-dark)",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      fontWeight: {
        bold: 700,
        semibold: 500,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
