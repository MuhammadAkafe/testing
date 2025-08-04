'use client'

import { 
  Heart, 
  Leaf, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  CheckCircle
} from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Diet Art Restaurant
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Where healthy eating meets culinary artistry. We believe that nutritious food can be both delicious and beautiful.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Best Healthy Restaurant 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
                             <p className="text-lg text-gray-600 mb-6">
                 Founded in 2018, Diet Art Restaurant began as a small family-owned establishment with a big dream: to prove that healthy eating doesn&apos;t have to be boring or tasteless. Our founder, Chef Sarah Martinez, was inspired by her grandmother&apos;s traditional recipes and her own journey to better health.
               </p>
               <p className="text-lg text-gray-600 mb-6">
                 What started as a simple mission to serve nutritious, delicious meals has grown into a beloved community gathering place. We&apos;ve maintained our commitment to using only the freshest, locally-sourced ingredients while expanding our menu to include diverse cuisines that celebrate healthy eating from around the world.
               </p>
               <p className="text-lg text-gray-600">
                 Today, we&apos;re proud to serve over 500 customers daily, each one leaving with a smile and a renewed appreciation for how good healthy food can taste.
               </p>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Healthy Dishes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">Fresh Ingredients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-600">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               We&apos;re committed to making healthy eating accessible, enjoyable, and sustainable for everyone.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health First</h3>
              <p className="text-gray-600">
                Every dish is crafted with nutrition in mind. We use whole ingredients, avoid processed foods, and create balanced meals that nourish your body and soul.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We partner with local farmers and suppliers to ensure the freshest ingredients while supporting our community and reducing our environmental impact.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our customers, employees, and local community. Everyone is welcome at our table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind every delicious meal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Martinez</h3>
              <p className="text-green-600 font-medium mb-2">Founder & Head Chef</p>
              <p className="text-gray-600 text-sm">
                With 15+ years of culinary experience, Sarah brings creativity and passion to every dish, ensuring each meal is both nutritious and delicious.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
              <p className="text-green-600 font-medium mb-2">Executive Chef</p>
              <p className="text-gray-600 text-sm">
                Specializing in Mediterranean and Asian fusion cuisine, Michael creates innovative dishes that celebrate healthy eating from around the world.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">LC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Chen</h3>
              <p className="text-green-600 font-medium mb-2">Nutritionist</p>
              <p className="text-gray-600 text-sm">
                Lisa ensures every menu item meets our high nutritional standards while maintaining incredible taste and visual appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Diet Art Restaurant?
            </h2>
                         <p className="text-xl text-gray-600">
               We&apos;re not just another restaurant - we&apos;re your partner in healthy living
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Daily deliveries from local farms ensure peak freshness and flavor
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-gray-600 text-sm">
                Recognized for excellence in healthy dining and customer service
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600 text-sm">
                Fresh, healthy meals prepared quickly without compromising quality
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600 text-sm">
                Every dish is prepared with care, passion, and attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Healthy Dining?
          </h2>
                     <p className="text-xl mb-8 max-w-2xl mx-auto">
             Visit us today and discover how delicious healthy eating can be. We can&apos;t wait to serve you!
           </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm opacity-90">123 Healthy Street, Wellness City</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-sm opacity-90">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm opacity-90">info@dietartrestaurant.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
