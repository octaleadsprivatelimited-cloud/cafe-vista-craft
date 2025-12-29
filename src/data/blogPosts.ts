export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "perfect-home-espresso",
    title: "How to Make the Perfect Espresso at Home",
    excerpt: "Master the art of home espresso with our comprehensive guide covering grind size, tamping pressure, and extraction timing.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&h=500&fit=crop",
    author: "Rajesh Kumar",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Brewing Guide",
    content: `
      <p>Making the perfect espresso at home might seem like a daunting task, but with the right knowledge and practice, you can achieve café-quality results in your own kitchen. This comprehensive guide will walk you through every step of the process.</p>

      <h2>Understanding Espresso</h2>
      <p>Espresso is a concentrated coffee beverage brewed by forcing hot water under high pressure through finely-ground coffee beans. The result is a rich, full-bodied shot with a layer of crema on top—the golden-brown foam that indicates a well-extracted espresso.</p>

      <h2>Essential Equipment</h2>
      <p>Before you begin, you'll need:</p>
      <ul>
        <li><strong>Espresso Machine:</strong> Choose between manual, semi-automatic, or fully automatic machines based on your budget and preference.</li>
        <li><strong>Quality Coffee Beans:</strong> Fresh, high-quality beans are crucial. Look for beans roasted within the last two weeks.</li>
        <li><strong>Burr Grinder:</strong> A consistent grind is essential. Burr grinders provide uniform particle size, which is critical for even extraction.</li>
        <li><strong>Tamper:</strong> Used to compress the coffee grounds evenly in the portafilter basket.</li>
        <li><strong>Scale:</strong> Precision is key. Weigh your coffee and water for consistent results.</li>
      </ul>

      <h2>The Perfect Grind Size</h2>
      <p>Grind size is arguably the most important factor in espresso making. Your coffee should be ground fine enough to create resistance to water flow, but not so fine that it becomes powdery. A good rule of thumb: the grounds should feel like fine sand, not flour. If your espresso runs too fast (under 20 seconds), grind finer. If it runs too slow (over 30 seconds), grind coarser.</p>

      <h2>Dose and Distribution</h2>
      <p>For a double shot, use 18-20 grams of coffee. After grinding, distribute the grounds evenly in the portafilter. Use your finger or a distribution tool to break up any clumps and ensure an even bed of coffee.</p>

      <h2>Tamping Technique</h2>
      <p>Proper tamping creates a uniform surface for water to pass through. Place the tamper on the coffee and apply firm, even pressure—about 30 pounds of force. The goal is to create a level, compact puck. Rotate the tamper slightly at the end to polish the surface.</p>

      <h2>Extraction Timing</h2>
      <p>The ideal extraction time for a double shot is 25-30 seconds, yielding 30-40ml (1-1.5 ounces) of espresso. Start timing when you press the brew button. If your shot is too fast, it will be sour and weak. If it's too slow, it will be bitter and over-extracted.</p>

      <h2>Water Temperature</h2>
      <p>Water temperature should be between 195-205°F (90-96°C). Most modern espresso machines have built-in temperature control, but if yours doesn't, let it heat up for at least 15-20 minutes before pulling your first shot.</p>

      <h2>Reading the Crema</h2>
      <p>A good espresso shot will have a thick, golden-brown crema that lasts for at least a minute. If your crema is too thin or disappears quickly, your grind might be too coarse or your beans might be stale. If it's too dark or bubbly, your grind might be too fine.</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using stale or pre-ground coffee</li>
        <li>Inconsistent grind size</li>
        <li>Uneven tamping</li>
        <li>Not cleaning your machine regularly</li>
        <li>Using the wrong coffee-to-water ratio</li>
      </ul>

      <h2>Practice Makes Perfect</h2>
      <p>Remember, making great espresso takes practice. Don't be discouraged if your first few attempts aren't perfect. Keep notes on what works and what doesn't, and adjust one variable at a time. With patience and practice, you'll be pulling shots that rival your favorite café.</p>
    `,
  },
  {
    id: 2,
    slug: "indian-coffee-origins",
    title: "Exploring Indian Coffee: From Coorg to Your Cup",
    excerpt: "Journey through India's coffee-growing regions and discover why Indian beans are gaining global recognition.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop",
    author: "Arjun Reddy",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Coffee Origins",
    content: `
      <p>India might not be the first country that comes to mind when you think of coffee origins, but this South Asian nation has been producing exceptional coffee for over 300 years. From the misty hills of Coorg to the slopes of Chikmagalur, Indian coffee has a unique character that's gaining recognition worldwide.</p>

      <h2>A Rich History</h2>
      <p>Coffee was first introduced to India in the 17th century by a Muslim saint named Baba Budan, who smuggled seven coffee beans from Yemen and planted them in the hills of Karnataka. These seven beans became the foundation of India's coffee industry, which now ranks as the world's sixth-largest coffee producer.</p>

      <h2>Karnataka: The Coffee Heartland</h2>
      <p>Karnataka produces over 70% of India's coffee, with three main growing regions:</p>

      <h3>Coorg (Kodagu)</h3>
      <p>Known as the "Scotland of India," Coorg's high altitude (3,000-5,000 feet) and abundant rainfall create ideal conditions for Arabica coffee. The region's coffee is known for its mild, balanced flavor with notes of chocolate and spice.</p>

      <h3>Chikmagalur</h3>
      <p>This is where Baba Budan first planted coffee. The region's coffee estates produce beans with a distinctive wine-like acidity and fruity notes. The famous Baba Budangiri hills are a must-visit for coffee enthusiasts.</p>

      <h3>Hassan</h3>
      <p>Smaller but significant, Hassan produces coffee with a smooth, mellow profile that's perfect for espresso blends.</p>

      <h2>Other Growing Regions</h2>
      <p>While Karnataka dominates, other states contribute significantly:</p>
      <ul>
        <li><strong>Kerala:</strong> Produces robust, full-bodied Robusta coffee</li>
        <li><strong>Tamil Nadu:</strong> Known for its high-altitude Arabica with bright acidity</li>
        <li><strong>Andhra Pradesh:</strong> Emerging region with great potential</li>
        <li><strong>Odisha:</strong> Small but growing coffee production</li>
      </ul>

      <h2>Indian Coffee Varieties</h2>
      <p>India grows both Arabica and Robusta varieties, each with distinct characteristics:</p>

      <h3>Arabica</h3>
      <p>Indian Arabica is known for its low acidity, full body, and spicy, earthy notes. Varieties like Kent, S.795, and Cauvery are popular. The monsooning process—where beans are exposed to monsoon winds—creates a unique flavor profile that's distinctly Indian.</p>

      <h3>Robusta</h3>
      <p>Indian Robusta is prized for its bold, strong flavor and high caffeine content. It's often used in espresso blends to add body and crema.</p>

      <h2>The Monsooning Process</h2>
      <p>One of India's most unique contributions to coffee processing is monsooning. This traditional method involves exposing coffee beans to monsoon winds and moisture, which causes them to swell and develop a distinctive flavor profile. Monsooned Malabar coffee is highly sought after for its low acidity and unique taste.</p>

      <h2>Why Indian Coffee Stands Out</h2>
      <p>Several factors make Indian coffee special:</p>
      <ul>
        <li><strong>Shade-Grown:</strong> Most Indian coffee is grown under shade trees, which protects the beans and creates complex flavors</li>
        <li><strong>Organic Practices:</strong> Many estates follow organic farming methods</li>
        <li><strong>Unique Processing:</strong> Traditional methods like monsooning create distinctive flavors</li>
        <li><strong>Terroir:</strong> The combination of altitude, climate, and soil creates unique regional characteristics</li>
      </ul>

      <h2>Sustainability and Fair Trade</h2>
      <p>Many Indian coffee estates are committed to sustainable practices and fair trade. The Coffee Board of India works to ensure quality and support farmers. When buying Indian coffee, look for certifications that indicate sustainable and ethical sourcing.</p>

      <h2>Brewing Indian Coffee</h2>
      <p>Indian coffee works well with various brewing methods:</p>
      <ul>
        <li><strong>Espresso:</strong> Indian beans create excellent crema and body</li>
        <li><strong>Filter Coffee:</strong> The traditional South Indian filter method brings out the coffee's full flavor</li>
        <li><strong>French Press:</strong> Great for highlighting the coffee's body and spice notes</li>
        <li><strong>Pour Over:</strong> Allows you to appreciate the coffee's nuanced flavors</li>
      </ul>

      <h2>Exploring Indian Coffee</h2>
      <p>If you're interested in trying Indian coffee, look for single-origin beans from specific regions. Each region offers something unique, from Coorg's balanced profile to Chikmagalur's fruity notes. Don't miss trying monsooned Malabar for a truly unique experience.</p>

      <p>Indian coffee is more than just a beverage—it's a journey through centuries of tradition, unique terroir, and innovative processing methods. As the global coffee community discovers these hidden gems, Indian coffee is finally getting the recognition it deserves.</p>
    `,
  },
  {
    id: 3,
    slug: "cold-brew-vs-iced-coffee",
    title: "Cold Brew vs. Iced Coffee: What's the Difference?",
    excerpt: "Understand the key differences between these popular cold coffee drinks and find out which one suits your taste.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=500&fit=crop",
    author: "Priya Menon",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Coffee 101",
    content: `
      <p>When the weather heats up, many coffee lovers turn to cold beverages. But there's often confusion between cold brew and iced coffee. While they might look similar, these two drinks are made very differently and offer distinct flavor profiles. Let's break down the differences.</p>

      <h2>What is Iced Coffee?</h2>
      <p>Iced coffee is simply hot-brewed coffee that's been cooled down and served over ice. The coffee is brewed using hot water (typically 195-205°F), then either cooled quickly or poured directly over ice. This method extracts the coffee quickly, usually in 3-5 minutes for drip coffee or 30 seconds for espresso.</p>

      <h3>Characteristics of Iced Coffee:</h3>
      <ul>
        <li>Brewed with hot water</li>
        <li>Quick extraction (minutes or seconds)</li>
        <li>Bright, acidic flavor profile</li>
        <li>Higher caffeine content per serving (if using strong brew)</li>
        <li>Can be made instantly</li>
        <li>May become diluted as ice melts</li>
      </ul>

      <h2>What is Cold Brew?</h2>
      <p>Cold brew is coffee that's steeped in cold or room-temperature water for an extended period—typically 12-24 hours. The slow, cold extraction process creates a smooth, less acidic beverage. After steeping, the coffee is filtered to remove the grounds.</p>

      <h3>Characteristics of Cold Brew:</h3>
      <ul>
        <li>Brewed with cold or room-temperature water</li>
        <li>Slow extraction (12-24 hours)</li>
        <li>Smooth, mellow, less acidic flavor</li>
        <li>Naturally sweeter taste</li>
        <li>Requires advance planning</li>
        <li>More concentrated, typically diluted before serving</li>
        <li>Longer shelf life (up to 2 weeks refrigerated)</li>
      </ul>

      <h2>Key Differences</h2>

      <h3>1. Brewing Method</h3>
      <p><strong>Iced Coffee:</strong> Hot water extracts coffee quickly, then it's cooled.</p>
      <p><strong>Cold Brew:</strong> Cold water extracts coffee slowly over many hours.</p>

      <h3>2. Flavor Profile</h3>
      <p><strong>Iced Coffee:</strong> Maintains the bright, acidic notes of hot coffee. You'll taste the coffee's origin characteristics more clearly.</p>
      <p><strong>Cold Brew:</strong> Smooth and mellow with reduced acidity. The flavor is often described as chocolatey, nutty, or caramel-like.</p>

      <h3>3. Caffeine Content</h3>
      <p>This is where it gets interesting. While cold brew concentrate is highly caffeinated, when diluted for serving, it typically has similar or slightly less caffeine than iced coffee. However, because cold brew is often served as a concentrate, it can pack more caffeine per serving.</p>

      <h3>4. Preparation Time</h3>
      <p><strong>Iced Coffee:</strong> Can be made in minutes—just brew hot coffee and cool it.</p>
      <p><strong>Cold Brew:</strong> Requires 12-24 hours of steeping time, so you need to plan ahead.</p>

      <h3>5. Acidity</h3>
      <p><strong>Iced Coffee:</strong> Has the same acidity as hot coffee, which can be harsh for some people.</p>
      <p><strong>Cold Brew:</strong> Up to 67% less acidic, making it gentler on the stomach.</p>

      <h2>Which Should You Choose?</h2>

      <h3>Choose Iced Coffee If:</h3>
      <ul>
        <li>You want something quick and immediate</li>
        <li>You enjoy bright, acidic coffee flavors</li>
        <li>You want to taste the coffee's origin characteristics</li>
        <li>You're making it for a small group</li>
      </ul>

      <h3>Choose Cold Brew If:</h3>
      <ul>
        <li>You prefer smooth, mellow coffee</li>
        <li>You have a sensitive stomach (lower acidity)</li>
        <li>You want to make a large batch that lasts</li>
        <li>You don't mind planning ahead</li>
        <li>You want a naturally sweeter taste</li>
      </ul>

      <h2>Making Iced Coffee at Home</h2>
      <p>To make great iced coffee:</p>
      <ol>
        <li>Brew your coffee stronger than usual (use more coffee or less water)</li>
        <li>Cool it quickly by pouring over ice, or refrigerate for 30 minutes</li>
        <li>Serve over fresh ice</li>
        <li>Consider using coffee ice cubes to prevent dilution</li>
      </ol>

      <h2>Making Cold Brew at Home</h2>
      <p>To make cold brew:</p>
      <ol>
        <li>Coarsely grind your coffee (similar to sea salt)</li>
        <li>Mix 1 cup of coffee grounds with 4 cups of cold water</li>
        <li>Steep for 12-24 hours at room temperature or in the refrigerator</li>
        <li>Strain through a fine-mesh sieve or coffee filter</li>
        <li>Dilute with water, milk, or serve over ice</li>
        <li>Store the concentrate in the refrigerator for up to 2 weeks</li>
      </ol>

      <h2>Pro Tips</h2>
      <ul>
        <li><strong>For Iced Coffee:</strong> Use coffee ice cubes made from leftover coffee to prevent dilution</li>
        <li><strong>For Cold Brew:</strong> Experiment with steeping time—longer steeps (18-24 hours) create stronger, more complex flavors</li>
        <li>Both methods work well with different coffee origins—experiment to find your favorite</li>
        <li>Cold brew concentrate can be used in cocktails, smoothies, and desserts</li>
      </ul>

      <p>Whether you prefer the bright, immediate satisfaction of iced coffee or the smooth, mellow complexity of cold brew, both have their place in a coffee lover's repertoire. Try both and see which one speaks to your taste buds!</p>
    `,
  },
  {
    id: 4,
    slug: "latte-art-basics",
    title: "Latte Art for Beginners: Your First Heart",
    excerpt: "Learn the fundamentals of milk steaming and pouring to create your first beautiful latte art design.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
    author: "Priya Menon",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Brewing Guide",
    content: `
      <p>Latte art is the beautiful practice of creating designs on the surface of espresso-based drinks by pouring steamed milk. While it might look intimidating, creating your first heart-shaped design is achievable with practice and the right technique. This guide will walk you through everything you need to know.</p>

      <h2>What You'll Need</h2>
      <ul>
        <li><strong>Espresso Machine:</strong> One with a steam wand for frothing milk</li>
        <li><strong>Fresh Espresso:</strong> A well-extracted shot with good crema</li>
        <li><strong>Whole Milk:</strong> Whole milk works best for latte art due to its fat content</li>
        <li><strong>Milk Pitcher:</strong> A stainless steel pitcher with a pointed spout</li>
        <li><strong>Clean Cup:</strong> Pre-warmed to maintain temperature</li>
      </ul>

      <h2>Step 1: Pull a Great Espresso Shot</h2>
      <p>Your latte art foundation starts with a good espresso shot. You need:</p>
      <ul>
        <li>Fresh, properly ground coffee</li>
        <li>A shot with rich, golden crema (the foam on top)</li>
        <li>Proper extraction (25-30 seconds for a double shot)</li>
      </ul>
      <p>Pour your espresso into a pre-warmed cup immediately after extraction. The crema should be thick and golden—this is your canvas.</p>

      <h2>Step 2: Steam the Milk Perfectly</h2>
      <p>Perfectly steamed milk is crucial for latte art. Here's how to achieve it:</p>

      <h3>The Process:</h3>
      <ol>
        <li><strong>Start with Cold Milk:</strong> Fill your pitcher about one-third full with cold, fresh milk</li>
        <li><strong>Purge the Steam Wand:</strong> Let steam out for 1-2 seconds to clear any water</li>
        <li><strong>Position the Wand:</strong> Place the tip just below the surface of the milk, slightly off-center</li>
        <li><strong>Create the Stretch:</strong> Turn on the steam and lower the pitcher slightly to create a "chirping" or "paper tearing" sound. This incorporates air into the milk</li>
        <li><strong>Stop Stretching:</strong> After 3-5 seconds (when the milk reaches body temperature), submerge the wand deeper</li>
        <li><strong>Create the Swirl:</strong> Position the wand to create a whirlpool, heating the milk to 140-150°F (60-65°C)</li>
        <li><strong>Stop:</strong> Turn off steam when the pitcher is too hot to touch (about 3 seconds)</li>
      </ol>

      <h3>What Good Milk Looks Like:</h3>
      <ul>
        <li>Shiny, glossy surface (like wet paint)</li>
        <li>No visible bubbles</li>
        <li>Smooth, velvety texture</li>
        <li>Temperature around 140-150°F</li>
      </ul>

      <h2>Step 3: Prepare for Pouring</h2>
      <p>Before you pour:</p>
      <ul>
        <li>Tap the pitcher on the counter to pop any large bubbles</li>
        <li>Swirl the milk to integrate the foam</li>
        <li>Hold the cup at a slight angle (about 20 degrees)</li>
        <li>Start pouring from about 3-4 inches above the cup</li>
      </ul>

      <h2>Step 4: Pour Your First Heart</h2>
      <p>The heart is the perfect beginner design. Here's the step-by-step:</p>

      <h3>Phase 1: The Base (High Pour)</h3>
      <ol>
        <li>Start pouring from 3-4 inches above the cup</li>
        <li>Pour the milk into the center of the espresso</li>
        <li>This "breaks" the crema and creates a base</li>
        <li>Keep the cup tilted slightly</li>
      </ol>

      <h3>Phase 2: The Fill (Medium Pour)</h3>
      <ol>
        <li>As the cup fills, lower the pitcher closer to the surface</li>
        <li>Continue pouring steadily</li>
        <li>Maintain the tilt of the cup</li>
        <li>Watch the white crema appear</li>
      </ol>

      <h3>Phase 3: The Design (Low Pour)</h3>
      <ol>
        <li>When the cup is about 70% full, bring the pitcher very close to the surface (almost touching)</li>
        <li>Pour a steady stream in the center</li>
        <li>This creates the "dot" that will become your heart</li>
        <li>Keep pouring until the dot is the size you want</li>
      </ol>

      <h3>Phase 4: The Cut (The Heart Shape)</h3>
      <ol>
        <li>While still pouring, quickly move the pitcher forward through the center of the dot</li>
        <li>As you move forward, lift the pitcher slightly and cut through the design</li>
        <li>This creates the "cleft" at the top of the heart</li>
        <li>Stop pouring and straighten the cup</li>
      </ol>

      <h2>Common Mistakes and How to Fix Them</h2>

      <h3>Milk Too Foamy</h3>
      <p><strong>Problem:</strong> Design looks blobby or doesn't hold shape</p>
      <p><strong>Solution:</strong> Reduce stretching time, tap and swirl more, or use less air when steaming</p>

      <h3>Milk Too Thin</h3>
      <p><strong>Problem:</strong> Design disappears or is too faint</p>
      <p><strong>Solution:</strong> Stretch the milk more (add more air), ensure proper foam integration</p>

      <h3>Pouring Too Fast</h3>
      <p><strong>Problem:</strong> Design gets messy or doesn't form</p>
      <p><strong>Solution:</strong> Slow down, especially during the design phase</p>

      <h3>Not Getting Close Enough</h3>
      <p><strong>Problem:</strong> Milk sinks instead of floating on top</p>
      <p><strong>Solution:</strong> Bring the pitcher much closer to the surface during the design phase</p>

      <h2>Practice Tips</h2>
      <ul>
        <li><strong>Practice Milk Steaming First:</strong> Master steaming before attempting designs</li>
        <li><strong>Use Water and Dish Soap:</strong> Practice pouring technique with water and a drop of dish soap (creates foam similar to milk)</li>
        <li><strong>Film Yourself:</strong> Record your pours to see what's happening</li>
        <li><strong>Be Patient:</strong> It takes 50-100 attempts to get consistent results</li>
        <li><strong>Focus on One Design:</strong> Master the heart before moving to more complex designs</li>
        <li><strong>Temperature Matters:</strong> Milk that's too hot or too cold won't work well</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Once you've mastered the heart, you can progress to:</p>
      <ul>
        <li><strong>Rosetta:</strong> A leaf-like pattern created by wiggling the pitcher</li>
        <li><strong>Tulip:</strong> Multiple hearts stacked together</li>
        <li><strong>Swan:</strong> A more advanced design combining rosetta and heart techniques</li>
      </ul>

      <h2>Remember</h2>
      <p>Latte art is about practice, patience, and having fun. Don't get discouraged if your first attempts don't look perfect. Even professional baristas pour hundreds of drinks before achieving consistency. The most important thing is that you're creating something beautiful and enjoying the process!</p>

      <p>Every great barista started with their first heart. With these fundamentals, you're well on your way to creating beautiful latte art at home.</p>
    `,
  },
  {
    id: 5,
    slug: "sustainable-coffee",
    title: "Why Sustainable Coffee Matters",
    excerpt: "Explore the importance of ethical sourcing and how your coffee choices impact farmers and the environment.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=500&fit=crop",
    author: "Arjun Reddy",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "Sustainability",
    content: `
      <p>Every morning, millions of people around the world start their day with a cup of coffee. But few consider the journey those beans took to reach their cup, or the impact of their coffee choices on farmers, communities, and the environment. Sustainable coffee isn't just a trend—it's essential for the future of coffee and the planet.</p>

      <h2>What is Sustainable Coffee?</h2>
      <p>Sustainable coffee refers to coffee that's produced in ways that are environmentally, socially, and economically responsible. This includes:</p>
      <ul>
        <li><strong>Environmental Sustainability:</strong> Practices that protect ecosystems, biodiversity, and natural resources</li>
        <li><strong>Social Sustainability:</strong> Fair treatment of workers, support for communities, and respect for human rights</li>
        <li><strong>Economic Sustainability:</strong> Fair prices for farmers that allow them to make a living and invest in their farms</li>
      </ul>

      <h2>The Environmental Impact</h2>
      <p>Coffee production has significant environmental implications:</p>

      <h3>Deforestation</h3>
      <p>Traditional sun-grown coffee often requires clearing forests, leading to habitat loss and reduced biodiversity. Shade-grown coffee, on the other hand, is grown under a canopy of trees, which:</p>
      <ul>
        <li>Preserves forest ecosystems</li>
        <li>Provides habitat for birds and wildlife</li>
        <li>Reduces the need for chemical fertilizers</li>
        <li>Helps combat climate change by storing carbon</li>
      </ul>

      <h3>Water Usage</h3>
      <p>Coffee processing requires significant amounts of water. Sustainable practices include:</p>
      <ul>
        <li>Water recycling systems</li>
        <li>Dry processing methods that use less water</li>
        <li>Protecting water sources from contamination</li>
      </ul>

      <h3>Chemical Use</h3>
      <p>Conventional coffee farming often relies heavily on pesticides and fertilizers, which can:</p>
      <ul>
        <li>Contaminate soil and water</li>
        <li>Harm wildlife and ecosystems</li>
        <li>Affect the health of farm workers</li>
      </ul>
      <p>Organic and sustainable farming methods reduce or eliminate these chemicals.</p>

      <h2>The Social Impact</h2>
      <p>Coffee is primarily grown in developing countries, and the industry faces significant social challenges:</p>

      <h3>Fair Wages</h3>
      <p>Many coffee farmers receive prices that don't cover their production costs, trapping them in cycles of poverty. Fair trade and direct trade models ensure farmers receive:</p>
      <ul>
        <li>Fair prices that cover production costs</li>
        <li>Premiums for community development</li>
        <li>Long-term trading relationships</li>
      </ul>

      <h3>Working Conditions</h3>
      <p>Sustainable coffee initiatives work to ensure:</p>
      <ul>
        <li>Safe working conditions</li>
        <li>No child labor</li>
        <li>Access to education and healthcare</li>
        <li>Gender equality in the coffee industry</li>
      </ul>

      <h3>Community Development</h3>
      <p>When farmers receive fair prices, they can invest in:</p>
      <ul>
        <li>Education for their children</li>
        <li>Healthcare facilities</li>
        <li>Infrastructure improvements</li>
        <li>Better farming equipment and techniques</li>
      </ul>

      <h2>The Economic Reality</h2>
      <p>The coffee market is volatile, and prices can fluctuate dramatically. When prices drop, farmers often can't cover their costs, leading to:</p>
      <ul>
        <li>Abandoned farms</li>
        <li>Migration to cities</li>
        <li>Poverty and food insecurity</li>
        <li>Reduced investment in quality and sustainability</li>
      </ul>

      <p>Sustainable coffee models provide price stability and premiums that help farmers weather market fluctuations and invest in their future.</p>

      <h2>Certifications to Look For</h2>
      <p>Several certifications help identify sustainable coffee:</p>

      <h3>Fair Trade</h3>
      <p>Ensures farmers receive fair prices and work under safe conditions. Fair Trade premiums support community development projects.</p>

      <h3>Organic</h3>
      <p>Certifies that coffee is grown without synthetic pesticides, fertilizers, or GMOs. Organic farming protects soil health and biodiversity.</p>

      <h3>Rainforest Alliance</h3>
      <p>Focuses on environmental conservation, worker rights, and sustainable farming practices. Farms must meet comprehensive standards.</p>

      <h3>Bird Friendly</h3>
      <p>Certifies shade-grown coffee that provides habitat for migratory birds. This is one of the most environmentally rigorous certifications.</p>

      <h3>Direct Trade</h3>
      <p>While not a certification, direct trade involves roasters buying directly from farmers, often paying premium prices and building long-term relationships.</p>

      <h2>The Climate Change Challenge</h2>
      <p>Coffee is particularly vulnerable to climate change:</p>
      <ul>
        <li>Rising temperatures threaten suitable growing regions</li>
        <li>Changing rainfall patterns affect yields</li>
        <li>Increased pests and diseases</li>
        <li>Extreme weather events damage crops</li>
      </ul>

      <p>Sustainable practices help coffee farms adapt to and mitigate climate change:</p>
      <ul>
        <li>Shade trees provide temperature regulation</li>
        <li>Diverse farming systems increase resilience</li>
        <li>Soil conservation practices improve water retention</li>
        <li>Carbon sequestration through tree planting</li>
      </ul>

      <h2>What You Can Do</h2>
      <p>As a coffee consumer, your choices matter:</p>

      <h3>1. Choose Certified Coffee</h3>
      <p>Look for Fair Trade, Organic, Rainforest Alliance, or Bird Friendly certifications when shopping.</p>

      <h3>2. Buy from Ethical Roasters</h3>
      <p>Support roasters who are transparent about their sourcing and pay fair prices to farmers.</p>

      <h3>3. Learn About Origins</h3>
      <p>Understanding where your coffee comes from helps you make informed choices and appreciate the work that goes into each cup.</p>

      <h3>4. Reduce Waste</h3>
      <p>Use reusable cups, compost coffee grounds, and minimize packaging waste.</p>

      <h3>5. Support Local Roasters</h3>
      <p>Local roasters often have direct relationships with farmers and can provide more information about their sourcing.</p>

      <h3>6. Ask Questions</h3>
      <p>Don't be afraid to ask your coffee shop or roaster about their sourcing practices. Transparency is key.</p>

      <h2>The Future of Coffee</h2>
      <p>Without sustainable practices, the future of coffee is at risk. Climate change, deforestation, and economic instability threaten both the quality and availability of coffee. By choosing sustainable coffee, you're:</p>
      <ul>
        <li>Supporting farmers and their communities</li>
        <li>Protecting ecosystems and biodiversity</li>
        <li>Combating climate change</li>
        <li>Ensuring coffee will be available for future generations</li>
        <li>Getting better-tasting coffee (sustainable practices often produce higher quality beans)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Sustainable coffee isn't just about feeling good—it's about creating a coffee industry that works for everyone: farmers, consumers, and the planet. Every cup of sustainable coffee you drink is a vote for a better future. The choices we make today will determine whether coffee remains a beloved beverage for generations to come.</p>

      <p>Remember: great coffee doesn't have to come at the expense of people or the planet. When you choose sustainable coffee, you're choosing quality, ethics, and a sustainable future—one cup at a time.</p>
    `,
  },
  {
    id: 6,
    slug: "perfect-coffee-water-ratio",
    title: "The Golden Ratio: Coffee to Water Perfection",
    excerpt: "Discover the science behind the perfect coffee-to-water ratio and how to adjust it for your preferred strength.",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=500&fit=crop",
    author: "Rajesh Kumar",
    date: "November 8, 2024",
    readTime: "4 min read",
    category: "Brewing Guide",
    content: `
      <p>One of the most fundamental aspects of brewing great coffee is getting the coffee-to-water ratio right. This seemingly simple measurement can make the difference between a perfect cup and a disappointing one. Let's explore the science and art of finding your ideal ratio.</p>

      <h2>Understanding Coffee Ratios</h2>
      <p>Coffee ratios are typically expressed as a ratio of coffee to water, such as 1:15 or 1:17. This means for every gram of coffee, you use 15 or 17 grams of water. The ratio affects:</p>
      <ul>
        <li>Strength (how concentrated the coffee is)</li>
        <li>Extraction (how much flavor is pulled from the beans)</li>
        <li>Body (the mouthfeel and texture)</li>
        <li>Balance (the harmony of flavors)</li>
      </ul>

      <h2>The Golden Ratio Range</h2>
      <p>The Specialty Coffee Association (SCA) recommends a ratio between 1:15 and 1:18. This range works well for most brewing methods and taste preferences:</p>
      <ul>
        <li><strong>1:15</strong> - Stronger, more concentrated (good for bold flavors)</li>
        <li><strong>1:16</strong> - Balanced, medium strength (most common starting point)</li>
        <li><strong>1:17</strong> - Lighter, more delicate (highlights subtle flavors)</li>
        <li><strong>1:18</strong> - Very light, tea-like (for delicate, high-quality beans)</li>
      </ul>

      <h2>Why Ratios Matter</h2>
      <p>The coffee-to-water ratio directly impacts extraction:</p>

      <h3>Too Much Coffee (Strong Ratio like 1:12)</h3>
      <ul>
        <li>Results in over-extraction if you brew too long</li>
        <li>Can taste bitter, astringent, or harsh</li>
        <li>Wastes coffee beans</li>
        <li>May be too strong for some palates</li>
      </ul>

      <h3>Too Little Coffee (Weak Ratio like 1:20)</h3>
      <ul>
        <li>Results in under-extraction</li>
        <li>Tastes weak, sour, or flat</li>
        <li>Fails to extract the full flavor potential</li>
        <li>Lacks body and complexity</li>
      </ul>

      <h3>The Sweet Spot (1:15 to 1:17)</h3>
      <ul>
        <li>Extracts the right amount of compounds</li>
        <li>Balanced flavor profile</li>
        <li>Good body and mouthfeel</li>
        <li>Highlights the coffee's best characteristics</li>
      </ul>

      <h2>Ratios by Brewing Method</h2>
      <p>Different brewing methods work best with different ratios:</p>

      <h3>Pour Over (V60, Chemex, Kalita Wave)</h3>
      <p><strong>Recommended: 1:15 to 1:17</strong></p>
      <p>Example: 20g coffee to 300-340g water</p>
      <p>Pour over methods benefit from slightly stronger ratios to compensate for the paper filter, which can absorb some oils.</p>

      <h3>French Press</h3>
      <p><strong>Recommended: 1:15 to 1:16</strong></p>
      <p>Example: 30g coffee to 450-480g water</p>
      <p>French press uses immersion brewing, so a slightly stronger ratio works well to extract full flavor.</p>

      <h3>AeroPress</h3>
      <p><strong>Recommended: 1:12 to 1:16</strong></p>
      <p>Example: 15g coffee to 180-240g water</p>
      <p>AeroPress is versatile—stronger ratios for concentrated shots, lighter ratios for regular coffee.</p>

      <h3>Espresso</h3>
      <p><strong>Recommended: 1:2 to 1:3</strong></p>
      <p>Example: 18g coffee to 36-54g espresso</p>
      <p>Espresso uses a much stronger ratio because it's a concentrated extraction method.</p>

      <h3>Cold Brew</h3>
      <p><strong>Recommended: 1:4 to 1:8</strong></p>
      <p>Example: 100g coffee to 400-800g water</p>
      <p>Cold brew is made as a concentrate, then diluted when served.</p>

      <h2>How to Measure</h2>
      <p>For consistent results, always use a scale:</p>

      <h3>Using a Scale (Recommended)</h3>
      <ol>
        <li>Place your brewing vessel on the scale</li>
        <li>Tare (zero) the scale</li>
        <li>Add your coffee (e.g., 20g)</li>
        <li>Tare again</li>
        <li>Add water to your target weight (e.g., 320g for a 1:16 ratio)</li>
      </ol>

      <h3>Why Weight, Not Volume?</h3>
      <p>Different coffee beans have different densities. A tablespoon of dark roast weighs less than a tablespoon of light roast. Using weight ensures consistency regardless of bean type or roast level.</p>

      <h2>Adjusting for Your Taste</h2>
      <p>Start with a 1:16 ratio and adjust based on your preferences:</p>

      <h3>If Your Coffee Tastes:</h3>
      <ul>
        <li><strong>Too Weak/Watery:</strong> Use more coffee (try 1:15 or 1:14)</li>
        <li><strong>Too Strong/Bitter:</strong> Use less coffee (try 1:17 or 1:18)</li>
        <li><strong>Sour/Under-extracted:</strong> Use more coffee OR grind finer</li>
        <li><strong>Bitter/Over-extracted:</strong> Use less coffee OR grind coarser</li>
      </ul>

      <h2>Factors That Affect Ratio</h2>
      <p>Several factors can influence the ideal ratio for your coffee:</p>

      <h3>Roast Level</h3>
      <ul>
        <li><strong>Light Roasts:</strong> Often benefit from slightly stronger ratios (1:15) to extract more flavor</li>
        <li><strong>Dark Roasts:</strong> Can work well with lighter ratios (1:17) as they're more soluble</li>
      </ul>

      <h3>Bean Origin</h3>
      <ul>
        <li><strong>Dense Beans (High Altitude):</strong> May need slightly more coffee</li>
        <li><strong>Softer Beans (Lower Altitude):</strong> May extract more easily</li>
      </ul>

      <h3>Grind Size</h3>
      <ul>
        <li><strong>Finer Grind:</strong> Extracts more, so you might use slightly less coffee</li>
        <li><strong>Coarser Grind:</strong> Extracts less, so you might use slightly more coffee</li>
      </ul>

      <h3>Brewing Time</h3>
      <ul>
        <li><strong>Longer Brew Time:</strong> May need less coffee (lighter ratio)</li>
        <li><strong>Shorter Brew Time:</strong> May need more coffee (stronger ratio)</li>
      </ul>

      <h2>Practical Examples</h2>
      <p>Here are some common ratios for different serving sizes:</p>

      <h3>Single Cup (250ml)</h3>
      <ul>
        <li>1:15 ratio: 17g coffee, 250g water</li>
        <li>1:16 ratio: 16g coffee, 250g water</li>
        <li>1:17 ratio: 15g coffee, 250g water</li>
      </ul>

      <h3>Two Cups (500ml)</h3>
      <ul>
        <li>1:15 ratio: 33g coffee, 500g water</li>
        <li>1:16 ratio: 31g coffee, 500g water</li>
        <li>1:17 ratio: 29g coffee, 500g water</li>
      </ul>

      <h3>Four Cups (1L)</h3>
      <ul>
        <li>1:15 ratio: 67g coffee, 1000g water</li>
        <li>1:16 ratio: 63g coffee, 1000g water</li>
        <li>1:17 ratio: 59g coffee, 1000g water</li>
      </ul>

      <h2>Tips for Consistency</h2>
      <ul>
        <li><strong>Always use a scale</strong> - Volume measurements are inconsistent</li>
        <li><strong>Keep notes</strong> - Record ratios that work well for different beans</li>
        <li><strong>One variable at a time</strong> - Change ratio OR grind, not both simultaneously</li>
        <li><strong>Account for water loss</strong> - Some water stays in the grounds (about 2x the coffee weight)</li>
        <li><strong>Consider your water quality</strong> - Hard water may need slight adjustments</li>
      </ul>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Using volume instead of weight</strong> - Inconsistent results</li>
        <li><strong>Not accounting for water retention</strong> - The final cup will be less than the water you added</li>
        <li><strong>Changing multiple variables</strong> - Makes it hard to know what worked</li>
        <li><strong>Not adjusting for different beans</strong> - Each coffee may need slight tweaks</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The perfect coffee-to-water ratio is personal and depends on your taste, brewing method, and the specific coffee you're using. Start with the golden ratio of 1:16, use a scale for consistency, and don't be afraid to experiment. With practice, you'll develop an intuition for what ratio works best for different coffees and brewing methods.</p>

      <p>Remember: the best ratio is the one that makes coffee you love to drink. Use these guidelines as a starting point, then adjust to find your perfect cup!</p>
    `,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
};

