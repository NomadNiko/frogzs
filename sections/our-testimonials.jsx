import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        { quote: "Frogzs helped me identify three different frog species on my nature walk! The AI is incredibly accurate.", name: "Sarah Chen", role: "Wildlife Enthusiast", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", },
        { quote: "As a biology teacher, Frogzs is a fantastic educational tool for my students. Highly recommend!", name: "Dr. Marcus Johnson", role: "Biology Educator", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", },
        { quote: "The identification is so fast and accurate. I've been sharing my discoveries with the Frogzs community!", name: "Emma Rodriguez", role: "Herpetology Student", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", },
        { quote: "Perfect for outdoor adventures. I love tracking all the frog species I encounter in the app.", name: "James Park", role: "Nature Photographer", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", },
        { quote: "My kids are obsessed with Frogzs! It's turned them into junior frog experts.", name: "Lisa Thompson", role: "Parent & Educator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", },
        { quote: "Frogzs has revolutionized how I document amphibian populations for my research.", name: "Dr. Amara Okafor", role: "Conservation Biologist", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle title="What Our Users Say" description="Join thousands of frog enthusiasts and scientists using Frogzs to discover and track amphibian species." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div key={testimonial.name} className="group border border-slate-800 p-6 rounded-xl"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-slate-100 text-base">{testimonial.quote}</p>
                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img className="size-10 rounded-full" src={testimonial.image} alt="user image" />
                            <div>
                                <h2 className="text-gray-200 font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-indigo-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}