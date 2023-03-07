import { Overlay } from '../../../../../components/Overlay';
import { ReactPortal } from '../../../../../components/ReactPortal';

import { TermsModalProps } from './types';
import * as S from './styles';
import { Button } from '../../../../../components/Button';
import { Text } from '../../../../../components/Text';

export const TermsModal: React.FC<TermsModalProps> = ({ isOpened }) => {
  if(!isOpened) {
    return null;
  }

  return (
    <ReactPortal containerId='modal-root'>
      <Overlay>
        <S.Container>
          <S.Modal>
            <header>
              <h3>Termos de Serviço e Uso e etc.</h3>
            </header>

            <main>
              <Text asChild>
                <pre>
                  {`Última atualização: 20 de fevereiro de 2023

Ao utilizar a aplicação Foto do Zinho, você concorda com os seguintes termos de serviço e uso. Leia atentamente antes de utilizar nossos serviços.

  1.   Política de Pedidos e Entrega
1.1. A aplicação Foto do Zinho oferece aos usuários a possibilidade de criar pedidos de revelação de fotos e de produtos personalizados para compra na loja virtual.
1.2. Os pedidos de impressão serão processados assim que o envio dos arquivos necessários forem enviados pelo usuário e de compra enviados assim que o pagamento do usuário for confirmado.
1.3. O Foto do Zinho fará o possível para que o prazo de entrega dos produtos comprados seja cumprido, mas não se responsabiliza por eventuais atrasos causados por problemas externos, como greves de transportadoras, problemas climáticos, entre outros.
1.4. O usuário poderá acompanhar o status do seu pedido na aplicação e também será notificado por e-mail quando a impressão estiver finalizada e o pedido estiver pronto para envio.

  2.   Privacidade e Proteção de Dados
2.1. O Foto do Zinho se compromete a proteger a privacidade e os dados pessoais dos usuários, conforme previsto na legislação aplicável.
2.2. Ao utilizar a aplicação, o usuário concorda com a coleta e o tratamento dos seus dados pessoais pelo Foto do Zinho, necessários para a prestação dos serviços oferecidos.
2.3. O Foto do Zinho não compartilhará as informações dos usuários com terceiros sem autorização prévia e expressa.

  3.   Propriedade Intelectual
3.1. Todos os direitos de propriedade intelectual relativos à aplicação, incluindo marcas, logotipos, imagens e conteúdos, pertencem exclusivamente ao Foto do Zinho.
3.2. É proibido o uso, reprodução, cópia, modificação ou distribuição de qualquer conteúdo da aplicação sem autorização prévia e expressa do Foto do Zinho.

  4.   Modificações nos Termos de Serviço e Uso
4.1. O Foto do Zinho se reserva o direito de modificar estes termos de serviço e uso a qualquer momento, sem necessidade de prévio aviso aos usuários.
4.2. O uso continuado da aplicação após a publicação das modificações constitui aceitação dos novos termos de serviço e uso.

  5.  Disposições Gerais
5.1. O Foto do Zinho não se responsabiliza por eventuais danos causados ao usuário ou a terceiros decorrentes do uso da aplicação.
5.2. Em caso de dúvidas ou sugestões, entre em contato conosco através dos canais disponíveis na aplicação.
Ao utilizar a aplicação Foto do Zinho, você concorda com estes termos de serviço e uso.`}
                </pre>
              </Text>
            </main>

            <footer>
              <Text size='sm'>
                Gostaria de lembrar que a aplicação passa apenas de um estudo de caso meu!
              </Text>
              <Text size='sm'>
                Todos esses termos foram criados apenas como modelo de estudo no desenvolvimento da aplicação Foto do Zinho e, garanto por meio disso que a aplicação <strong>não envolve nada com dinheiro, aquisição ou consumo real de produtos</strong>. Estará bem claro ao decorrer do uso da aplicação.
              </Text>
              <Text size='sm'>
                Obrigado pela vossa compreensão :)
              </Text>
            </footer>

            <div className="actions">
              <Button>
                Entendido
              </Button>
            </div>
          </S.Modal>
        </S.Container>
      </Overlay>
    </ReactPortal>
  );
};
