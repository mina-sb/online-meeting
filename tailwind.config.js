tailwind.config = {
  theme: {
    colors: {
      base: {
        black: "#000000",
        white: "#FFFFFF",
      },
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
      surface: {
        base: {
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
        on: {
          high_emphasis: "#FFF",
          medium_emphasis: "#C5C6D0",
          disabled: "#8F9099",
        },
      },
      border: {
        default: "#1D1F27",
        light: "#2D3440",
      },
      alert: {
        green: "#36B37E",
        warning: "#FFAB00",
        error: {
          default: "#C74E5B",
          bright: "#FFB2B6",
          brighter: "#FFEDEC",
          dim: "#270005",
        },
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
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
};
