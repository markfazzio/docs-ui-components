import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import {
  a11yLight,
  agate,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { ThemeProps } from '../common/interfaces';

interface CodeBlockProps extends ThemeProps, SyntaxHighlighterProps {}

export const CodeBlock = (props: CodeBlockProps) => {
  const { children, className = 'mb-3', language, theme } = props;
  const highlighterTheme = theme === 'light' ? a11yLight : agate;

  return (
    <SyntaxHighlighter
      language={language}
      className={className}
      style={highlighterTheme}>
      {children}
    </SyntaxHighlighter>
  );
};
