#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
OG_DIR = ASSETS / "og"
OG_DIR.mkdir(parents=True, exist_ok=True)

ICON_SRC = ASSETS / "icon.png"
ICON_192 = ASSETS / "icon-192.png"
ICON_180 = ASSETS / "icon-180.png"
OG_IMAGE = OG_DIR / "og-balance.jpg"

W, H = 1200, 630


def load_font(size):
    candidates = [
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/System/Library/Fonts/SFNS.ttf",
        "/System/Library/Fonts/Supplemental/HelveticaNeue.ttc",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for path in candidates:
        font_path = Path(path)
        if font_path.exists():
            try:
                if font_path.suffix == ".ttc":
                    return ImageFont.truetype(str(font_path), size=size, index=0)
                return ImageFont.truetype(str(font_path), size=size)
            except Exception:
                continue
    try:
        return ImageFont.load_default()
    except Exception:
        return ImageFont.load_default()


def vertical_gradient(width, height, top_color, bottom_color):
    base = Image.new("RGB", (width, height), top_color)
    draw = ImageDraw.Draw(base)
    for y in range(height):
        ratio = y / (height - 1)
        r = int(top_color[0] + (bottom_color[0] - top_color[0]) * ratio)
        g = int(top_color[1] + (bottom_color[1] - top_color[1]) * ratio)
        b = int(top_color[2] + (bottom_color[2] - top_color[2]) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return base


def add_radial_glow(canvas, center, radius, color, opacity=160, blur=60):
    glow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow)
    cx, cy = center
    bbox = [cx - radius, cy - radius, cx + radius, cy + radius]
    draw.ellipse(bbox, fill=(*color, opacity))
    glow = glow.filter(ImageFilter.GaussianBlur(blur))
    canvas.alpha_composite(glow)


def create_icons():
    if not ICON_SRC.exists():
        raise FileNotFoundError(f"Missing {ICON_SRC}")
    icon = Image.open(ICON_SRC).convert("RGBA")
    icon_192 = icon.resize((192, 192), Image.LANCZOS)
    icon_180 = icon.resize((180, 180), Image.LANCZOS)
    icon_192.save(ICON_192, format="PNG")
    icon_180.save(ICON_180, format="PNG")


def create_og_image():
    base = vertical_gradient(W, H, (5, 6, 15), (8, 12, 24)).convert("RGBA")
    add_radial_glow(base, (int(W * 0.18), int(H * 0.22)), 340, (143, 91, 255), opacity=120, blur=120)
    add_radial_glow(base, (int(W * 0.82), int(H * 0.25)), 320, (72, 230, 176), opacity=110, blur=120)
    add_radial_glow(base, (int(W * 0.62), int(H * 0.78)), 300, (80, 150, 255), opacity=90, blur=120)

    draw = ImageDraw.Draw(base)
    headline = "Finanze personali con controllo totale"
    subline = "Privacy-first · Offline · Open source"

    headline_font = load_font(60)
    subline_font = load_font(30)

    def text_size(text, font):
        bbox = font.getbbox(text)
        return bbox[2] - bbox[0], bbox[3] - bbox[1]

    headline_w, headline_h = text_size(headline, headline_font)
    subline_w, subline_h = text_size(subline, subline_font)

    icon = Image.open(ICON_SRC).convert("RGBA")
    icon_size = 112
    icon = icon.resize((icon_size, icon_size), Image.LANCZOS)

    total_height = icon_size + 30 + headline_h + 16 + subline_h
    start_y = (H - total_height) // 2

    icon_x = (W - icon_size) // 2
    icon_y = start_y
    base.alpha_composite(icon, (icon_x, icon_y))

    headline_x = (W - headline_w) // 2
    headline_y = icon_y + icon_size + 30
    draw.text((headline_x, headline_y), headline, font=headline_font, fill=(238, 243, 255))

    subline_x = (W - subline_w) // 2
    subline_y = headline_y + headline_h + 16
    draw.text((subline_x, subline_y), subline, font=subline_font, fill=(174, 186, 212))

    base.convert("RGB").save(OG_IMAGE, format="JPEG", quality=92, optimize=True)


if __name__ == "__main__":
    create_icons()
    create_og_image()
    print("Generated:")
    print(f"- {ICON_192}")
    print(f"- {ICON_180}")
    print(f"- {OG_IMAGE}")
