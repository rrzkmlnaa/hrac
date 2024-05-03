import Button from "@/components/buttons/Button";

export default function NeedInfo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary-500 text-center py-20">
          <h2 className="text-white py-4">Need more information?</h2>
          <Button
          variant="light"
          >
            Contact Us
          </Button>
        </div>
        <div className="bg-yellow-500 text-center py-20">
          <h2 className="text-primary-500 py-4">HR Academy’s training catalogue</h2>
          <Button
          variant="light"
          >
            Contact Us
          </Button>
        </div>
      </section>
  )
}
