# Automart Visual and Functional Audit

Reference: `https://scriptfusions.mnsithub.com/html/automart/index.html`

Audit viewport: 1440 × 900

## Global shell and navigation

- Reference header stack is 188px; local header stack is 176px.
- Desktop navigation dropdown panels are missing locally.
- Required Pages submenu is missing: Team, Team Details, Projects, Project Details, Testimonial, FAQ, and 404 Error.
- Services, Shop, and Blog dropdown content is missing.
- Sticky-header transition, submenu reveal motion, and mobile nested-menu animation are missing.
- Active-link styling is present but does not fully match the reference underline and hover motion.

## Home page section comparison

| Section | Reference | Local | Audit result |
| --- | ---: | ---: | --- |
| Hero | 752px | 720px | Wrong height, content placement, background treatment, controls, and animation |
| Services | 960px | 1126px | Rows are oversized and reveal/hover motion differs |
| About | 691px | 777px | Wrong image composition, experience card, feature area, and spacing |
| Home shop | 884px | 740px | Wrong product card anatomy and missing carousel behaviour |
| Choose | 644px | 643px | Size is close; internal composition and entrance motion need correction |
| Marquee | 120px | 120px | Size is correct; continuous movement needs reference timing |
| Process | 637px | 735px | Oversized and missing reference reveal sequence |
| Team | 671px | 854px | Wrong cards, image masks, vertical labels, spacing, slider, and controls |
| Video | 490px | 490px | Size is correct; text composition, play treatment, overlay, and motion differ |
| Testimonials | 759px | 724px | Height, carousel movement, and card treatment differ |
| FAQ | 716px | 826px | Wrong height and missing animated accordion behaviour |
| Locations | 542px | 473px | Cards, map background, spacing, hover, and reveal differ |
| Gallery | 733px | 787px | Wrong grid sizing and missing lightbox interaction |
| Contact | 910px | 862px | Layout height and form treatment differ |
| Blog | 971px | 835px | Cards are compressed and motion differs |

## Inner pages

- Page banner height is correct at 475px, but the local header begins it 12px too early.
- About page contains the correct broad section order but reuses incorrect About, Team, Video, Locations, and testimonial implementations.
- Services page broad height is close, but service-row hover/reveal behaviour differs.
- Shop page broad height is close, but product cards, filters, image treatment, and hover controls differ.
- Blog page broad height is close, but card proportions, reveal motion, and image interaction differ.
- Contact page broad height is close, but the reference information cards and form/map composition need visual correction.

## Missing or incorrect behaviour

- WOW-style alternating fade/slide reveals are absent.
- Hero entrance sequence and slider controls are incomplete.
- Product and team carousels are static.
- Product wishlist/cart/quick-view/compare controls are incomplete.
- FAQ accordion state and animated open/close are incomplete.
- Gallery lightbox is absent.
- Counter-up animation is absent.
- Scroll-to-top treatment is absent.
- Reference hover lift, image zoom, icon reveal, and button-arrow motion are incomplete.

## Priority correction order

1. Header, dropdowns, sticky/mobile navigation, and exact 188px desktop shell.
2. Hero height and complete first-viewport composition.
3. About image stack and experience card.
4. Home shop carousel/card anatomy.
5. Team carousel/card anatomy.
6. Video section composition.
7. FAQ, locations, gallery, and scroll interactions.
8. Remaining spacing, typography, responsive breakpoints, and final cross-page verification.

## Final correction status

- Shared desktop header now matches the 188px reference stack.
- Home hero is 752px and uses the reference background, subject image, customer card, controls, typography scale, and entrance motion.
- Pages, Services, Shop, and Blog desktop dropdowns are implemented; Home intentionally remains without a dropdown.
- Mobile navigation includes animated nested submenu groups.
- Home section geometry now follows the reference sequence and measured heights.
- About uses the reference 488 × 424 main image, 250 × 372 overlapping image, vertical decorative label, and 370 × 140 experience card.
- Home Shop uses 300 × 404 cards, correct product imagery, discount badges, four actions, rating/pricing panel, hover lift, scroll snapping, and controls.
- Team uses 410 × 312 cards with 270px circular portraits, vertical role/name treatment, social reveal, scroll snapping, and controls.
- Video section uses the 490px desktop composition with overlay, split typography, image pill, play ripple, and Watch Video label.
- FAQ now has animated open/close content.
- Gallery includes image zoom, overlay, and a functional lightbox.
- Counters, marquee, scroll reveal, sticky navigation, hover motion, and scroll-to-top behaviour are implemented.
- All six routes have zero horizontal overflow in audited desktop, tablet, and mobile layouts.

### Final measured parity

| Route | Reference desktop | Local desktop | Reference 390px | Local 390px |
| --- | ---: | ---: | ---: | ---: |
| Home | 11,677px | 11,679px | — | responsive, zero overflow |
| About | 5,704px | 5,704px | 8,910px | 8,910px |
| Services | 2,634px | 2,635px | 4,591px | 4,591px |
| Shop | 3,908px | 3,909px | 10,812px | 10,812px |
| Blog | 3,126px | 3,126px | 5,891px | 5,892px |
| Contact | 2,940px | 2,940px | 5,053px | 5,053px |
