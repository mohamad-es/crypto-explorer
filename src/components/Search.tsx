import { TTopListSearchParams } from "@/types/response.ts";
import { Search01Icon } from "hugeicons-react";
import { useSearch } from "@/hooks/useSearch.tsx";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Modal from "@/components/Modal.tsx";
import MinRowCard from "@/components/Cards/MinRowCard.tsx";
import RenderState from "@/utils/RenderState";

type SearchProps = {
  params: TTopListSearchParams;
  setParams: Dispatch<SetStateAction<TTopListSearchParams>>;
};

const Search = ({ params, setParams }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending, error } = useSearch(params);

  return (
    <Fragment>
      <button className="btn-success items-center gap-3 mb-3 ms-auto px-4" onClick={() => setIsOpen(true)}>
        <Search01Icon size={20} />
        Search
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={
            "bg-white border border-light-grey flex text-grey-subtitle items-center w-full gap-4 rounded-lg p-2.5 dark:bg-main/70 dark:border-white/15 dark:text-white/80"
          }
        >
          <Search01Icon />
          <input
            className={"w-full dark:placeholder:text-white/80"}
            placeholder={"Search coin"}
            value={params.search_string}
            onChange={(e) => setParams({ ...params, search_string: e.target.value })}
          />
        </div>

        <div className={"mt-10 h-80 overflow-auto"}>
          <RenderState isPending={isPending} data={data} error={error}>
            {data?.Data.LIST.map((item) => (
              <MinRowCard data={item} key={item.ID} />
            ))}
          </RenderState>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Search;
