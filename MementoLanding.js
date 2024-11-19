import React, { useState } from 'react';
import { 
  Camera, 
  Heart, 
  Album, 
  BookOpen, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Camera,
    title: 'Capture Moments',
    description: 'Easily add and organize your most cherished memories with a few clicks.'
  },
  {
    icon: Heart,
    title: 'Favorite Memories',
    description: 'Mark special moments and quickly find them with our favorite feature.'
  },
  {
    icon: Album,
    title: 'Tag & Categorize',
    description: 'Create custom tags to organize memories by type, people, or events.'
  }
];

export default function MementoLanding() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle email signup here
    alert(`Thank you for your interest, ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Memento
            </h1>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-purple-600 hover:text-purple-800">
                Features
              </a>
              <Button>
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-4">
            Preserve Your Precious Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Memento helps you collect, organize, and relive your most treasured moments with ease and style.
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <Button type="submit">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </section>

        <section id="features" className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-purple-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Memory Journey
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Join thousands of users who are capturing and cherishing their life's most beautiful moments.
          </p>
          <Button variant="secondary" size="lg">
            Create Your First Memory
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-500">
            © 2024 Memento. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-purple-600 hover:text-purple-800">Privacy</a>
            <a href="#" className="text-purple-600 hover:text-purple-800">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
