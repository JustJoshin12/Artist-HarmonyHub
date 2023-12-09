import AlbumIcon from "./AlbumIcon/AlbumIcon";


function NewReleases({newReleaseData}) {
  console.log(newReleaseData)

  return (
    <section className="mx-auto py-5 my-14 max-w-7xl">
      <h3 className="mb-9 text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4">
        New Releases
      </h3>
      <ul className="grid gap-10 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newReleaseData.map((item) => {
          return <AlbumIcon  key={item.id} data={item} />;
        })}
      </ul>
    </section>
  );
}

export default NewReleases;
