export default function Home(){
  return (
    <main className = "min-h-screen">
    {/*Test Header Area */}
    <div className ="bg-exacto-blue text-white p-10">
      <h1 className = "text-4xl font-bold">Exacto Background Test</h1>
      <p className = "text-exacto-gold mt-2">Section</p>
    </div>

    {/*Test Body Area*/}
    <div className = "bg-exacto-lightBg p-10 h-64">
      <h2 className = "text-2xl font-bold">This is light bg</h2>
      <button className = "mt-5 bg-exacto-gold text-white px-6 py-2 rounded-full font-semibold">
        call now
      </button>
    </div>
    </main>
  );
}