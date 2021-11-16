import { Grid, Paper, Stack } from "@mui/material";
import { PageContentWrapper } from "../Application";
import { styled } from "@mui/material/styles";
import { customStyles } from "../Application";
import { textAlign } from "@mui/system";

const PaperItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  h3: { color: customStyles.longText },
  // h3: { color: theme.palette.text.primary },
  // TODO - *tmc* notice theme.palette.text.secondary is the same as custom?
  //      maybe need to find custom and change to this css?
  color: theme.palette.text.secondary,
}));

export const HomePage = (): JSX.Element => {
  return (
    <PageContentWrapper>
      <div style={{ margin: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PaperItem>
              <table style={{ width: "75%" }}>
                <tr>
                  <th style={{ textAlign: "left" }}>Helping Other</th>
                  <th style={{ textAlign: "left" }}>Others Helping</th>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Use query tools provided from the GQP community
                  </td>
                  <td style={{ textAlign: "left" }}>
                    Provide query tools for the GQP community
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ textAlign: "center", color: "black", fontSize: "1.25em" }}
                    colSpan={2}
                  >
                    <br />
                    All the tools work together because the speak one common language:
                    <strong>The Gabby Query Protocol</strong>.
                  </td>
                </tr>
              </table>
              <br />
              <br />
              <section>
                <h4 style={{ color: "#0041b1" }}>The current norm</h4>
                <p>
                  The industry standard is to represent queries in a flat data structure.
                  <code>firstName = 'John' AND lastName = 'Smith'</code>. That works well for
                  simple queries. The flat structure is popular because its gets the job done,
                  minimally and quickly.
                </p>
              </section>
              <section>
                <h4 style={{ color: "#0041b1" }}>The GQP standard</h4>
                <p>
                  Instead of representing queries in a flat data structure, the GQP standard
                  proposes a tree structure. This is more flexible and allows for more complex
                  queries. This is core of GraphQL. Its also the method used to process complex
                  math expressions (mathjs).
                </p>
              </section>
              <section>
                <h4 style={{ color: "#0041b1" }}>Results Matter</h4>
                <p>
                  In less time to build a single flat query expression a developer can produce
                  the same Query that can be translate to: GraphQL, elasticSearch, js
                  matcher/filter function, SQL, mongoDB, etc.
                </p>
              </section>
              <section>
                <h4 style={{ color: "#0041b1" }}>Community</h4>
                <p>
                  GQP is able to do this because we work smarter and we work together. A lot
                  like distributed computing except with the people factor.
                </p>
              </section>
            </PaperItem>
          </Grid>
          <Grid item xs={6}>
            <PaperItem>
              <section>
                <h3>For the geeks</h3>
                <p>Why this is awesome</p>
              </section>
            </PaperItem>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <section>
                <h3>For the Managers</h3>
                <p>Why this is awesome</p>
              </section>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </PageContentWrapper>
  );
};
