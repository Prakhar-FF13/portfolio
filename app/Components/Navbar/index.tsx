export default function Navbar() {
  return (
    <div className="flex justify-between align-middle mt-4 rounded-lg py-7 px-9 bg-itembgcolor">
      <div className="flex gap-16">
        <span>Home</span>
        <span>Blogs</span>
        <span>Projects</span>
        <span>Resume</span>
      </div>
      <button>Change Theme</button>
    </div>
  )
}