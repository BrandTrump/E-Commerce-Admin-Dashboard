import SizeForm from "@/components/SizeForm";
import prismadb from "@/lib/prismadb";

async function SizePage({ params }: { params: { sizeId: string } }) {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}

export default SizePage;
