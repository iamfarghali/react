# Tips

## 12-portfolio

### Dark/Light Theme (Using **Semantic Tokens** with **TailwindCSS (V4)**)

Why **Sementic Tokens** Approach?
For decoupling application style from specific colors, making it easier to switch
themes.

- Css Variables

  - Here's some of common tokens you may need
    - **--background**: The primary background color of the user interface or a specific section.
    - **--foreground**: The primary text and icon color that appears on the **--background**.
    - **--card**: The background color specifically for card-like containers.
    - **--card-foreground**: The text and icon color that appears on the **--card** background.
    - **--border**: The color used for borders, outlines, and visual separators.
    - **--primary**: The main color representing interactive elements and your brand's key actions (e.g., primary buttons, links).
    - **--primary-foreground**: The text and icon color that ensures sufficient contrast when placed on the **--primary** background.
    - **--secondary**: A color for secondary interactive elements or less emphasized components.
    - **--secondary-foreground**: The text and icon color that ensures sufficient contrast when placed on the **--secondary** background.
    - **--muted**: A background color for less prominent or secondary areas, often a lighter or darker shade of the main background.
    - **--muted-foreground**: Text and icon color that appears on **--muted**, typically less visually prominent than **--foreground**.
    - **--accent**: A color used for highlighting or accentuating specific elements.
    - **--accent-foreground**: The text and icon color that ensures sufficient contrast when placed on the **--accent** background.
    - **--destructive**: A color used to indicate potentially negative actions or critical information (e.g., delete buttons, error states).
    - **--destructive-foreground**: The text and icon color that ensures sufficient contrast when placed on the **--destructive** background.
    - **--success**: A color used to indicate successful actions or positive status.
    - **--warning**: A color used to indicate cautionary messages or actions that require attention.
    - **--error**: A color used to indicate error messages or critical issues.
    - **--info**: A color used to provide neutral or informative messages.
    - **--ring**: The color used for focus rings, typically appearing around interactive elements when they are focused for accessibility.
    - **--input**: The default background color for input fields.
    - **--input-foreground**: The default text color for input fields.

- @layer base

  ```css
  @layar base {
    :root {
      /* Set your variables for LIGHT theme */
    }

    .dark {
      /* Set your variables for DARK theme */
    }

    * {
      @apply border-border;
    }

    body {
      @apply bg-background text-foreground transition-colors duration-300;
    }
  }
  ```

- @theme Directive

  ```css
  @theme {
    /* Extend TailwindCSS Colors */
    --color-background: hsl(var(--background));
    --color-card: hsl(var(--card));
    /*
      .
      .
      .
      .
      .
      So on
    */
  }
  ```

- Theme context
  - Craete theme context
    - check preferd theme based on localstorage value or system preference
    - update theme state and based on that add/remove 'dark' class from documentElement classList
    - update the localstorage value
    - export provider and useTheme hook
  - In App component wrap your application with the theme provider
  - In TogglerTheme (a button) component use useTheme hook to get access to toggleTheme functionality

## 14-hero

### Multi Themes

In **12-portfolio** I've built dark/light theme based on background/foreground
but I think this approache doesnot fit properly, so I depend on background color
from 50 to 950, theme color from 50 to 950, and accent color.

### Multi Languages

- LangContext

To change site's language and document's direction, and presist the user prefered
language in localstorage, and make sharing lang,setLang easier.

- LangSwitcher

Just component that responsiable for UI language switcher buttons

- data.js

Here where I added the whole site's text for each language, its an object with
key 'en' for english text and key 'ar' for arabic text, each key consists of object
with key/value for each bit of text.

What if there is a highlighted part in some text? In this case I made the key's value
is a function that takes highlight component that used inside it where highlighted part be.
