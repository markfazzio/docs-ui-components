import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import {
  a11yLight,
  agate,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { ThemeProps } from '../common/interfaces';
import { ReactNode } from 'react';

interface CodeBlockProps
  extends ThemeProps,
    Omit<SyntaxHighlighterProps, 'children'> {
  children?: ReactNode;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { children, className = 'mb-3', language, theme } = props;
  const highlighterTheme = theme === 'light' ? a11yLight : agate;

  return (
    <SyntaxHighlighter
      language={language}
      className={className}
      style={highlighterTheme}>
      {children as string[]}
    </SyntaxHighlighter>
  );
};
