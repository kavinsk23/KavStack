import { Button } from "./stories/button/Button";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            KavStack Button Component
          </h1>
          <p className="text-gray-600">
            Testing button variants and sizes with Tailwind CSS v4
          </p>
        </div>

        {/* Variants Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>
        </div>

        {/* Sizes Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Disabled State
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
          </div>
        </div>

        {/* With Icons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">
              <span aria-hidden="true">→</span>
              Next
            </Button>
            <Button variant="secondary">
              <span aria-hidden="true">←</span>
              Back
            </Button>
            <Button variant="ghost">
              <span aria-hidden="true">✓</span>
              Done
            </Button>
          </div>
        </div>

        {/* Interactive Test */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Interactive Test
          </h2>
          <Button variant="primary" onClick={() => alert("Button clicked!")}>
            Click Me!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
