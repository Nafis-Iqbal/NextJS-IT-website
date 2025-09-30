import { prisma } from './prisma'

export async function seedDatabase() {
  try {
    // Check if projects already exist
    const existingProjects = await prisma.project.count()
    
    if (existingProjects === 0) {
      // Seed some demo projects
      await prisma.project.createMany({
        data: [
          {
            title: 'E-Commerce Platform',
            description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
            githubUrl: 'https://github.com/example/ecommerce',
            liveUrl: 'https://ecommerce-demo.vercel.app',
            featured: true,
          },
          {
            title: 'Healthcare Management System',
            description: 'Comprehensive system for managing patient records, appointments, and medical history with HIPAA compliance.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
            githubUrl: 'https://github.com/example/healthcare',
            liveUrl: 'https://healthcare-demo.vercel.app',
            featured: false,
          },
          {
            title: 'AI Chatbot Platform',
            description: 'Intelligent conversational AI platform with natural language processing and multi-language support.',
            technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
            githubUrl: 'https://github.com/example/ai-chatbot',
            liveUrl: 'https://ai-chatbot-demo.vercel.app',
            featured: true,
          },
        ]
      })
      
      console.log('Database seeded with demo projects')
    }
    
    return { success: true, message: 'Database initialized successfully' }
  } catch (error) {
    console.error('Error seeding database:', error)
    return { success: false, error: 'Failed to seed database' }
  }
}

export async function connectToDatabase() {
  try {
    await prisma.$connect()
    console.log('Connected to database successfully')
    return { success: true }
  } catch (error) {
    console.error('Failed to connect to database:', error)
    return { success: false, error: 'Database connection failed' }
  }
}

export async function disconnectFromDatabase() {
  try {
    await prisma.$disconnect()
    console.log('Disconnected from database')
  } catch (error) {
    console.error('Error disconnecting from database:', error)
  }
}