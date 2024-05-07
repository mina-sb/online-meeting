tailwind.config = {
  theme: {
    colors: {
      primary: {
        base: {
          default: "#2572ED",
          bright: "#538DFF",
          dim: "#002D6D",
          disabled: "#004299",
        },
        on: {
          high_emphasis: "#000",
          medium_emphasis: "#CCDAFF",
          disabled: "#8F9099",
        },
      },
      secondary: {
        base: {
          default: "#444954",
          bright: "#70778B",
          dim: "#293042",
          disabled: "#404759",
        },
        on: {
          high_emphasis: "#000",
          medium_emphasis: "#D3D9F0",
          disabled: "#A4ABC0",
        },
      },
      mode: {
        dark: {
          surface: {
            default: "#191B23",
            bright: "#272A31",
            brighter: "#2E3038",
            dim: "#11131A",
          },
          background: {
            default: "#0B0E15",
            dim: "#000",
            dim_64: "rgba(0, 0, 0, 0.64)",
            gradient: "linear-gradient(#000, #FFF)",
          },
          on_surface: {
            high_emphasis: "#FFF",
            medium_emphasis: "#C5C6D0",
            disabled: "#8F9099",
          },
        },
        light: {
          surface: {
            default: "#EFF0FA",
            bright: "#E7E7F2",
            brighter: "#D8D9E3",
            dim: "#FAF8FF",
          },
          background: {
            default: "#FEFBFF",
            dim: "#FFFFFF",
            dim_64: "rgba(255, 255, 255, 0.64)",
            gradient: "linear-gradient(#FFF, #000);",
          },
          on_surface: {
            high_emphasis: "#191B23",
            medium_emphasis: "#2E3038",
            disabled: "#A9ABB4",
          },
        },
      },
      border_colors: {
        default: "#1D1F27",
        light: "#2D3440",
      },
      alert_colors: {
        green: "#36B37E",
        warning: "#FFAB00",
        error: {
          default: "#C74E5B",
          bright: "#FFB2B6",
          brighter: "#FFEDEC",
          dim: "#270005",
        },
      },
      base_colors: {
        black: "#000000",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
    fontSize: {
      "3xs": "0.625rem",
      "2xs": "0.75rem",
      xs: "0.875",
      sm: "1rem",
      default: "1.25rem",
      lg: "2.125rem",
      xl: "3rem",
      "2xl": "3.75rem",
      "3xl": "5rem",
    },
    extend: {
      fontSize: {
        "heading-1": [
          "5rem",
          {
            fontWeight: "600",
            lineHeight: "5.25rem",
            letterSpacing: "-1.5px",
          },
        ],
        "heading-2": [
          "3.75rem",
          {
            fontWeight: "600",
            lineHeight: "3.75rem",
            letterSpacing: "-0.5px",
          },
        ],
        "heading-3": [
          "3rem",
          {
            fontWeight: "600",
            lineHeight: "3.25rem",
          },
        ],
        "heading-4": [
          "2.125rem",
          {
            fontWeight: "600",
            lineHeight: "2.5rem",
            letterSpacing: "0.25px",
          },
        ],
        "heading-5": [
          "1.5rem",
          {
            fontWeight: "600",
            lineHeight: "2rem",
          },
        ],
        "heading-6": [
          "1.25rem",
          {
            fontWeight: "600",
            lineHeight: "1.5rem",
            letterSpacing: "0.15000000596046448px",
          },
        ],
        "subtitle-1": [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "1.5rem",
            letterSpacing: "0.15000000596046448px",
          },
        ],
        "subtitle-2": [
          "0.875rem",
          {
            fontWeight: "600",
            lineHeight: "1.25rem",
            letterSpacing: "0.10000000149011612px",
          },
        ],
        button: [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "1.5rem",
            letterSpacing: "0.5px",
          },
        ],
        "body-1": [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
            letterSpacing: "0.5px",
          },
        ],
        "body-1-semibold": [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "1.5rem",
            letterSpacing: "0.5px",
          },
        ],
        "body-2": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.25rem",
            letterSpacing: "0.25px",
          },
        ],
        "body-2-semibold": [
          "0.875rem",
          {
            fontWeight: "600",
            lineHeight: "1.25rem",
            letterSpacing: "0.25px",
          },
        ],
        link: [
          "0.875rem",
          {
            fontWeight: "600",
            lineHeight: "1.25rem",
            letterSpacing: "0.25px",
          },
        ],
        caption: [
          "0.75rem",
          {
            fontWeight: "400",
            lineHeight: "1rem",
            letterSpacing: "0.4000000059604645px",
          },
        ],
        "caption-semibold": [
          "0.75rem",
          {
            fontWeight: "600",
            lineHeight: "1rem",
            letterSpacing: "0.4000000059604645px",
          },
        ],
        overline: [
          "0.625rem",
          {
            fontWeight: "600",
            lineHeight: "1rem",
            letterSpacing: "1.5px",
          },
        ],
        paragraph: [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "2.25rem",
            letterSpacing: "0.5px",
          },
        ],
      },
    },
  },
};
