import { getFileContent } from '@/file-reader';

export default async function Page() {
  const fileContent = await getFileContent();
  return (
    <div>
      {fileContent}
    </div>
  );
}