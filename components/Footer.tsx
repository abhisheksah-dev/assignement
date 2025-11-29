// components/Footer.tsx
export default function Footer(){ 
  return (
    <footer className="py-8 px-6 md:px-16 bg-white border-t">
      <div className="max-w-6xl mx-auto text-sm text-gray-600">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
