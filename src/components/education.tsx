import { Card, CardContent } from '@/components/ui/Card'

export default function Education() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="education">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Educación</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Analista en Tecnologías de la Información</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Universidad ORT Uruguay | 2021 - Actualidad</p>
              <p className="text-sm">Especialización en desarrollo web full-stack. Habilidades en C#, SQL Server, React.js y Bootstrap.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Desarrollador Web 2.0</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Instituto BIOS | 2019 - 2020</p>
              <p className="text-sm">Certificación en Desarrollo Web. Práctica en HTML, CSS, JavaScript, PHP y MySQL.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}