
export default function Header() {
  return (
    <div className="flex justify-between  items-center border-b-2 py-2">
        <h2 className="font-bold text-xl">Knowladge Cafe</h2>
        <div className="w-30">
             <img className="w-30 rounded-full" src="/src/assets/images/profile.png" alt="" />
        </div>
    </div>
  )
}
