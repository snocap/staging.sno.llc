import './Testimonials.svelte.css';
/* src/components/Testimonials.svelte generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import "./lib/theme.css";
import Testimonial from "./Testimonial.svelte.js";
import Carat from "./Carat.svelte.js";

function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = text("I had the opportunity to connect startups that use the resources of Sweet Farm to prototype and scale their innovation to leaders and investors from Latin America. This is a unique opportunity to put two continents that are so important to food production together.");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (13:2) <Testimonial    name="Fengru Lin, CEO @ TurtleTree"    headshotURI="/headshots/fl.jpeg"    reversed>
function create_default_slot(ctx) {
	let t;

	return {
		c() {
			t = text("TurtleTree has been really fortunate to have the support of Sweet Farm right from the beginning. Nate and Anna have a knack for identifying founders at an early stage that have significant potential. They have been extremely valuable to help us ideate, strategize and think through many of our early decisions.");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let div;
	let testimonial0;
	let t0;
	let testimonial1;
	let t1;
	let carat;
	let current;

	testimonial0 = new Testimonial({
			props: {
				name: "Felipe Giannetti, Partner @ StartSe",
				headshotURI: "/headshots/fg.jpeg",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	testimonial1 = new Testimonial({
			props: {
				name: "Fengru Lin, CEO @ TurtleTree",
				headshotURI: "/headshots/fl.jpeg",
				reversed: true,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	carat = new Carat({ props: { fragment: "general-partners" } });

	return {
		c() {
			section = element("section");
			div = element("div");
			create_component(testimonial0.$$.fragment);
			t0 = space();
			create_component(testimonial1.$$.fragment);
			t1 = space();
			create_component(carat.$$.fragment);
			attr(div, "class", "with-gutter");
			attr(section, "id", "testimonials");
			attr(section, "data-header-content", "Powering platforms for <br/> a better climate future.");
			attr(section, "class", "svelte-9uw78l");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div);
			mount_component(testimonial0, div, null);
			append(div, t0);
			mount_component(testimonial1, div, null);
			append(section, t1);
			mount_component(carat, section, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const testimonial0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				testimonial0_changes.$$scope = { dirty, ctx };
			}

			testimonial0.$set(testimonial0_changes);
			const testimonial1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				testimonial1_changes.$$scope = { dirty, ctx };
			}

			testimonial1.$set(testimonial1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(testimonial0.$$.fragment, local);
			transition_in(testimonial1.$$.fragment, local);
			transition_in(carat.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(testimonial0.$$.fragment, local);
			transition_out(testimonial1.$$.fragment, local);
			transition_out(carat.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_component(testimonial0);
			destroy_component(testimonial1);
			destroy_component(carat);
		}
	};
}

class Testimonials extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Testimonials;