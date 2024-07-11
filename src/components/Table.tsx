import { TableColumnProps, TableRowProps } from '../common/interfaces';

interface TableProps {
  columns: Array<TableColumnProps>;
  rows: Array<TableRowProps>;
}

export const Table = (props: TableProps) => {
  const { columns, rows } = props;

  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          {columns.map((column: TableColumnProps, index: number) => (
            <th
              key={`column-${index}-${column.label}`}
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {rows.map((item: TableRowProps, index: number) => (
          <tr key={`term-${index}-${item.term}`}>
            <td className="px-6 py-4 text-sm font-bold">{item.term}</td>
            <td className="px-6 py-4 text-sm">{item.definition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
