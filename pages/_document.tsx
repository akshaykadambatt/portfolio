import Document, { DocumentContext } from 'next/document'
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'

class JssDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: function one(App){
          return function two(props){
            return (
              <JssProvider registry={registry} generateId={generateId}>
                <App {...props} />
              </JssProvider>
            )
          }
        }
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    }
  }
}

export default JssDocument;
