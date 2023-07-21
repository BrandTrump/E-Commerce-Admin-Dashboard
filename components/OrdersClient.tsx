"use client";

import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import {
  OrderColumn,
  columns,
} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/Columns";
import { DataTable } from "@/components/ui/data-table";

interface OrdersClientProps {
  data: OrderColumn[];
}

function OrdersClient({ data }: OrdersClientProps) {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />

      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
}

export default OrdersClient;
