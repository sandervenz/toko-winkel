import Image from "next/image";
import "tailwindcss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-base-200 text-base-content min-h-screen pt-16" data-theme="retro">
      <Header />
      {/* Hero Section */}
      <div className="hero bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <div className="text-center lg:text-left max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Toko Winkel</h1>
            <p className="text-xl md:text-2xl text-success font-medium mb-4">
              Produk Bayi Buatan Hati, untuk Hati
            </p>
            <p className="text-base mb-6">
              Koleksi produk bayi berkualitas tinggi yang dibuat dengan penuh kasih sayang untuk si kecil tercinta. Setiap produk dipilih khusus untuk kenyamanan dan kebahagiaan keluarga Anda.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="btn btn-success">Jelajahi Produk</button>
              <button className="btn btn-outline">Tentang Kami</button>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-3">
            <div className="transform translate-y-2 sm:-translate-y-4">
              <Image
                src="/baby-sleep.jpg"
                alt="Baby"
                width={220}
                height={220}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 border-8 border-white"
              />
            </div>
            <div className="transform translate-y-1 sm:translate-y-2">
              <Image
                src="/baby-toys.jpg"
                alt="Baby Toy"
                width={180}
                height={180}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 border-8 border-white"
              />
            </div>
            <div className="transform translate-x-2 translate-y-2 sm:translate-x-3">
              <Image
                src="/baby-clothes.jpg"
                alt="Baby Clothing"
                width={200}
                height={200}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 border-8 border-white"
              />
            </div>
            <div className="transform translate-x-1">
              <Image
                src="/baby-dress.jpg"
                alt="Baby Book"
                width={240}
                height={240}
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dibuat dengan Cinta</h3>
              <p className="text-sm text-base-content/80">
                Setiap produk dibuat dengan perhatian khusus dan kasih sayang untuk si kecil
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Kualitas Terjamin</h3>
              <p className="text-sm text-base-content/80">
                Bahan berkualitas tinggi dan aman untuk kesehatan dan kenyamanan bayi
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Pengiriman Cepat</h3>
              <p className="text-sm text-base-content/80">
                Layanan pengiriman yang cepat dan aman ke seluruh Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Produk Unggulan</h2>
        <div className="flex flex-wrap justify-center gap-16 px-4 md:px-6">
                    <div className="card bg-base-100 shadow-xl w-80 hover:scale-105 transition-transform duration-300">
            <figure className="h-48 relative">
              <Image 
                src="/baby-clothes.jpg" 
                alt="Baby Stroller" 
                fill={true}
                className="object-cover"
                sizes="(max-width: 320px) 100vw"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-base">Baby Stroller</h2>
              <p className="text-xs md:text-sm">Comfortable and safe for your baby.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl w-80 hover:scale-105 transition-transform duration-300">
            <figure className="h-48 relative">
              <Image 
                src="/baby-toys.jpg" 
                alt="Baby Crib" 
                fill={true}
                className="object-cover"
                sizes="(max-width: 320px) 100vw"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-base">Baby Crib</h2>
              <p className="text-xs md:text-sm">Ensure a good night&apos;s sleep for your baby.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl w-80 hover:scale-105 transition-transform duration-300">
            <figure className="h-48 relative">
              <Image 
                src="/baby-dress.jpg" 
                alt="Baby Carrier" 
                fill={true}
                className="object-cover"
                sizes="(max-width: 320px) 100vw"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-base">Baby Carrier</h2>
              <p className="text-xs md:text-sm">Carry your baby comfortably wherever you go.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="btn btn-success">Lihat Semua Produk</button>
        </div>
      </div>

      {/* About Section */}
      <div className="hero bg-base-100 py-16">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8">
          <div className="lg:w-1/2 w-full h-[300px] md:h-[400px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-8 border-white">
              <Image
                src="/parents.jpg"
                alt="Happy Family"
                fill={true}
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cerita di Balik Toko Winkel</h2>
            <div className="space-y-4 text-base-content/80">
              <p>
                Toko Winkel lahir dari cinta seorang ibu untuk anaknya. Dimulai dari kebutuhan sederhana untuk memberikan yang terbaik bagi si kecil, kami memahami betapa pentingnya produk berkualitas tinggi untuk perkembangan dan kenyamanan bayi.
              </p>
              <p>
                Sebagai bisnis keluarga yang telah berdiri sejak 2018, kami berkomitmen untuk menyediakan produk bayi yang tidak hanya aman dan berkualitas, tetapi juga dibuat dengan penuh kasih sayang. Setiap produk dipilih dengan teliti oleh tim kami yang terdiri dari para orang tua berpengalaman.
              </p>
              <p>
                Kepercayaan ribuan keluarga di seluruh Indonesia menjadi motivasi kami untuk terus berinovasi dan memberikan pelayanan terbaik, karena kami percaya, setiap bayi berhak mendapatkan yang terbaik untuk tumbuh kembangnya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
