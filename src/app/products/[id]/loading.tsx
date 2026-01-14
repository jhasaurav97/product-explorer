

export default function Loading(){
    return (
      <main className="max-w-5xl mx-auto px-4 py-6 animate-pulse">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-80 bg-gray-200 rounded" />
          <div>
            <div className="h-6 bg-gray-200 mb-3 w-3/4" />
            <div className="h-4 bg-gray-200 mb-2 w-1/2" />
            <div className="h-5 bg-gray-200 mb-4 w-1/3" />
            <div className="h-4 bg-gray-200 mb-2" />
            <div className="h-4 bg-gray-200 w-5/6" />
          </div>
        </div>
      </main>
    );
}