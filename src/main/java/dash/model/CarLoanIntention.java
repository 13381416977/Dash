package dash.model;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "VCOF043_CARLOAN_INTENTION")
@DynamicInsert
@DynamicUpdate
@Data
public class CarLoanIntention implements Serializable {

  private static final long serialVersionUID = -1454419555883667483L;
  /** @description 主键Id */
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  @Column(name = "COF043_INTENTION_ID", length = 100)
  private String id;

  /** 最终建议金额(预估额度) */
  @Column(name = "COF043_AMOUNT_SUGGESTED")
  private Double amountFinancedSuggested;

  @Column(name = "COF043_CREATE_S")
  @Temporal(TemporalType.TIMESTAMP)
  private Date createDate = new Date();

  public static void main(String[] args) throws AWTException, InterruptedException {
    Robot robot = new Robot();
    while (true) {
      Thread.sleep(1000);
      robot.mousePress(KeyEvent.BUTTON1_MASK);
      robot.mouseRelease(KeyEvent.BUTTON1_MASK);
    }
  }
}
